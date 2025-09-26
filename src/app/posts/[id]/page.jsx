import React from 'react'
export const getSinglePosts = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    return data
}

export async function generateMetadata({ params }) {
const {id}=params 
  // fetch post information
  const post =await getSinglePosts(id)
 
  return {
    title: post.title,
    description: post.body,
  }
}
 
 

export default async function page({params}) {
    const p= await params
    const singlePosts= await getSinglePosts(p.id)
  return (
    <div className='flex flex-col gap-5'>
        <h1 className='text-green-400 font-bold'> {singlePosts.title}</h1>
        <h1> {singlePosts.body}</h1>
        </div>
  )
}
