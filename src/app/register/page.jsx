"use client"
import React from 'react'
import { registerUser } from '../actions/auth/registerUser'

export default function RegisterPage() {
    const handleRegister=async(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
        const paylod={email,password}
        const result=await registerUser(paylod)
        console.log(result)
        console.log(email,password)
    }
    return (
        <div className=" flex justify-center">
            <form onSubmit={handleRegister} className='flex flex-col gap-5 mt-6'>
            <div>
                <label >Email</label><br />
                <input type="email" id="email" placeholder="Email" />
            </div>
            <div>
                <label >Password</label><br />
                <input type="password" id="password" placeholder="password" />
            </div>
            <button type='submit'>Register</button>
            </form>
        </div>
    )
}
