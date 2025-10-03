"use client"
import { signIn } from 'next-auth/react'

export default function Login() {
  return (
    <div>
        <button onClick={()=>signIn()}>Login</button>
        </div>
  )
}
