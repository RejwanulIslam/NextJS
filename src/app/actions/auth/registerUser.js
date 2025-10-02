"use server"

import dbConnect from "@/lib/dbConnect"



export const registerUser=async(paylod)=>{
const result= await dbConnect("test_user").insertOne(paylod)
return result
}