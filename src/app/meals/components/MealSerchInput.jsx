"use client"
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export default function MealSerchInput() {
    // const [meals, setMeals] = useState([])
    const [search, setSearch] = useState("")
    const router=useRouter()
    const pathName=usePathname()
    useEffect(() => {
        const serchQuery={search}
        const urlQueryPathname=new URLSearchParams(serchQuery)
        const url=`${pathName}?${urlQueryPathname}`
        router.push(url)
    }, [search])
    return (
        <div>
            <div className='flex justify-center'>
                <input value={search} onChange={(e) => {
                    setSearch(e.target.value)
                }} type="text" placeholder="Serch" />
            </div>
        </div>
    )
}
