import { NextRequest, NextResponse } from 'next/server'

const output = [
    {id:1,productName:'Bonsai black Pine',category:'conifer'},
    {id:2,productName:'Bonsai Peach',category:'caduceous'},
    {id:3,productName:'Bonsai Cypress',category:'conifer'},
    {id:4,productName:'Bonsai Lemon',category:'citrus'},
    {id:5,productName:'Bonsai Oak',category:'caduceous'},
]

export async function GET(request:NextRequest,response:NextResponse){
    const prodId = request.url?.split('/')[5] ?request.url?.split('/')[5] :"0"
    return new NextResponse(JSON.stringify(output.filter((el)=>el.id===(parseInt(prodId)))))
}   