"use server"

import dbConnect from "@/lib/dbConnect"

export const getMembers = async () => {
    const data = await dbConnect('test_data').find().toArray()
    return data
}