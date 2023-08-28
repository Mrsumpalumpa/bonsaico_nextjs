import { NextApiRequest, NextApiResponse } from 'next'

const output = [
    {id:1,productName:'Bonsai black Pine',category:'conifer'},
    {id:2,productName:'Bonsai Peach',category:'caduceous'},
    {id:3,productName:'Bonsai Cypress',category:'conifer'},
    {id:4,productName:'Bonsai Lemon',category:'citrus'},
    {id:5,productName:'Bonsai Oak',category:'caduceous'},
]

export async function GET(request:NextApiRequest,response:NextApiResponse){
    const prodId = request.url?.split('/')[5] ?request.url?.split('/')[5] :"0"
    return new Response(JSON.stringify(output.filter((el)=>el.id===(parseInt(prodId)))))
}   