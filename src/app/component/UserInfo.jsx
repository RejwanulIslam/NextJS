"use client"

import { useSession } from "next-auth/react"

export default function UserInfo() {
    const seation = useSession()
    return (
        <div>{JSON.stringify(seation)}</div>
    )
}
