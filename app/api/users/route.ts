import { NextApiRequest, NextApiResponse } from 'next'

export async function GET(request:NextApiRequest){
    const output = [
        {id:1,userName:'pepe',email:'pepe@gmail.com'},
        {id:2,userName:'lolo',email:'lolo@gmail.com'},
        {id:3,userName:'lala',email:'lala@gmail.com'},
        {id:4,userName:'jandro',email:'jandro@gmail.com'},
        {id:5,userName:'marc',email:'marc@gmail.com'},
    ]
    return new Response(JSON.stringify(output))
}   