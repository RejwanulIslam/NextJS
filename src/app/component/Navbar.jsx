import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='w-1/2 flex justify-between'>
        <Link href="/posts">Posts</Link>
        <Link href="/meals">Meals</Link>
        <Link href="/members">Members</Link>
        <Link href="/members/add">Add Members</Link>
        <Link href="/">Home</Link>
    </div>
  )
}

