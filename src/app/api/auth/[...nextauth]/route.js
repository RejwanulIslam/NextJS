import dbConnect from "@/lib/dbConnect"
import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
export const authOption = {
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. "Sign in with...")
            name: "Credentials",
            // `credentials` is used to generate a form on the sign in page.
            // You can specify which fields should be submitted, by adding keys to the `credentials` object.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                // username: { label: "Username", type: "text", placeholder: "jsmith" },
                email: { label: "Email", type: "email" },
                password: { label: "Password", type: "password" },

            },
            async authorize(credentials, req) {
                console.log("credentials", credentials)
                const { password, email } = credentials
                const user = await dbConnect("test_user").findOne({ email })
                if (!user) {
                    console.log('user not fond')
                    return
                }
                const isPassword = password == user?.password
                // Add logic here to look up the user from the credentials supplied

                if (isPassword) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            }
        })
    ],
    
    callbacks: {

        async session({ session, token, user }) {
           if(token){
            session.user.email=token.email
           }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if(user){
                token.email=user.email
            }
            return token
        }
    }

}
const handler = NextAuth(authOption)

export { handler as GET, handler as POST }