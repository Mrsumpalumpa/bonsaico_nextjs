import { connectDB } from '@/utils/database'
import User from '@/models/user'
import { NextRequest } from 'next/server';

export async function GET(request:NextRequest){
    try{
        await connectDB()
        if(request.nextUrl.searchParams.get("email")){
            const output =await User.findOne({email:request.nextUrl.searchParams.get("email")})
            return new Response(JSON.stringify(output))
        }else{
            const output =await User.find({})
            return new Response(JSON.stringify(output))
        }
    }
    catch(err){
        console.log(err)
        return new Response(`Error while fetching resource. ${JSON.stringify(err)}`,{status:500})

    }
    
   
}   