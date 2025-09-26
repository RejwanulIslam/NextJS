
"use server"
import dbConnect from "@/lib/dbConnect"
import { revalidatePath } from "next/cache"

export const postSingleMember = async (postedData) => {
    const result = await dbConnect("test_data").insertOne(postedData)

    revalidatePath('/members')
    return {
        acknowledged: result.acknowledged,
        insertedId: result.insertedId.toString()
    }
}