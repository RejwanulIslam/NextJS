import dbConnect from '@/lib/dbConnect'
import { redirect } from 'next/navigation'
import React from 'react'
import { getMembers } from '../actions/getMembers/getMembers'
// export const dynamic="force-dynamic"
export default async function page() {
    // const res = await fetch('https://next-js-core-concepts-part-2.vercel.app/api/items',{
    //     cache:'force-cache'
    // })
    // const data = await res.json()
    // if(data.length>3){
    //     redirect('/')
    // }
    const data= await getMembers()
    return (
        <div>
              {JSON.stringify(data)}
        </div>
    )
}
