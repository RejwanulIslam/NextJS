"use client"

import { postSingleMember } from "@/app/actions/postSingleMember/postSingleMember"
import { useRouter } from "next/navigation"

export default function AddMember() {
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const member = { name }
        // const res=await fetch('http://localhost:3000/api/items',{
        //     method:'POST',
        //     body:JSON.stringify(member),
        //     headers:{
        //         'content-type':'application/json'
        //     }
        // })

        //   const result= await res.json()
        const result=await postSingleMember(member)
        console.log(result)

        console.log(name)
        e.target.reset()
        router.push('/members')
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="flex gap-5">
                <input type='text' name='name' placeholder='Add member'></input>
                <input type='submit' value='submit'></input>
            </form>
        </div>
    )
}
