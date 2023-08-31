import { NextApiRequest, NextApiResponse } from 'next'
import { connectDB } from '@/utils/database'
import Prompt from '@/models/prompt'
import User from '@/models/user';

export async function GET(req:NextApiRequest,res:NextApiResponse){
    try{
        await connectDB();
        // get all prompts
        const allPrompts = await Prompt.find({});
        return new Response(JSON.stringify(allPrompts))
    }
    catch(err){
        return new Response(`Error failed getting prompt data`, {status:500})
    }
    const output = [
        {creator:1,post:'pepe',tag:'#omg'},
        {creator:2,post:'perico',tag:'#omg'},
        {creator:3,post:'ano',tag:'#omg'},
        {creator:4,post:'culo',tag:'#omg'},
       
    ]
    return new Response(JSON.stringify(output))
}       