import Link from 'next/link'
import React from 'react'
import Login from './Login'

export default function Navbar() {
  return (
    <div className='w-1/2 flex justify-between'>
        <Link href="/posts">Posts</Link>
        <Link href="/meals">Meals</Link>
         <Login></Login>
        <Link href="/members">Members</Link>
        <Link href="/members/add">Add Members</Link>
        <Link href="/">Home</Link>
    </div>
  )
}

