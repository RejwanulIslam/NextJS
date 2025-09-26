import dbConnect from "@/lib/dbConnect"
import { revalidatePath } from "next/cache"

export async function GET() {

    const data = await dbConnect("test_data").find().toArray()
     
    return Response.json(data)
}
export async function POST(req) {
    const postedData = await req.json()
    const result = await dbConnect("test_data").insertOne(postedData)

      revalidatePath('/members')
    return Response.json(result)
}