"use client"
import { SessionProvider } from "next-auth/react"

export default function NextAuthSeationProvider({children}) {
    return (
        <SessionProvider>
           {children}
        </SessionProvider>
    )
}