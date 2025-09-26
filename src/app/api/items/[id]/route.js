import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb"

export async function GET(req,{params}) {
    const p = await params
 
const singleData=await dbConnect("test_data").findOne({_id:new ObjectId(p.id)})
    return Response.json(singleData)
}

export async function PATCH(req,{params}) {
    const p = await params
 const postedData=await req.json()
 const filter={
   _id:new ObjectId(p.id) 
 }
const updateData= await dbConnect("test_data").updateOne(filter,
    {$set:{...postedData}})

    return Response.json(updateData)
}


export async function DELETE(req,{params}) {
    const p = await params
 
const deletData=await dbConnect("test_data").deleteOne({_id:new ObjectId(p.id)})
    return Response.json(deletData)
}