import dbConnect from "@/lib/dbConnect"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";

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
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        })
    ],

    callbacks: {

        async signIn({ user, account, profile, email, credentials }) {
            if (account) {
                try {
                    const { providerAccountId, provider } = account
                    const { email: user_email, image, name } = user
                    const paylod = {
                        role:'user',
                        providerAccountId,
                        provider,
                        user_email,
                        image,
                        name
                    }
                    const isAxist = await dbConnect("test_user").findOne({ providerAccountId })
                    if (!isAxist) {
                         await dbConnect("test_user").insertOne(paylod)

                    }
                } catch (error) {

                }

                // console.log('coll back',{ user, account, profile, email, credentials})
            }
            return true
        },
        async session({ session, token, user }) {
            if (token) {
                session.user.email = token.email
                session.user.role = token.role
            }
            return session
        },
        async jwt({ token, user, account, profile, isNewUser }) {
            if (user) {
                token.email = user.email
                token.role = user.role
            }
            return token
        }
    }

}