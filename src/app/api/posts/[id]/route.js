import Post from "@/models/Post";
import connect from "@/utils/db";
import mongoose from "mongoose";
import { NextResponse } from "next/server";


export const  GET= async (req,{params})=>{
    const {id} = params
    try{
        await connect()
        const data = await Post.findById(id)
        return new NextResponse(JSON.stringify(data),{status:200})
    }catch{
        return new NextResponse("connection database error" ,{ status : 500})
    }
} 

export const  DELETE= async (req,{params})=>{
    const {id} = params
    try{
        await connect()
        const data = await Post.findByIdAndDelete(id)
        return new NextResponse('Post has been deleted',{status:200})
    }catch{
        return new NextResponse("connection database error" ,{ status : 500})
    }
} 