import { connectDB } from '@/utils/database'
import { NextApiRequest, NextApiResponse } from 'next'
import Prompt from '@/models/prompt'

//NextApiRequest no working at request.json()
export async function POST(request:Request){
    const data = await request.json()
    try{
        await connectDB()
        const newPrompt = new Prompt({
            creator:data.creator,
            message:data.message,
            tag:data.tag
        })
        await newPrompt.save()
        return new Response(`${JSON.stringify(newPrompt)} created`,{status:201})
    }
    catch(err){
        return new Response(`Error ${err} while creating ${data.creator} post.`,{status:500})
    }
    
    
}   