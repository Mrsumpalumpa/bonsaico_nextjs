import { NextRequest, NextResponse } from 'next/server'

export async function GET(request:NextRequest){
    const output = [
        {id:1,productName:'Bonsai black Pine',category:'conifer'},
        {id:2,productName:'Bonsai Peach',category:'caduceous'},
        {id:3,productName:'Bonsai Cypress',category:'conifer'},
        {id:4,productName:'Bonsai Lemon',category:'citrus'},
        {id:5,productName:'Bonsai Oak',category:'caduceous'},
    ]
    return new NextResponse(JSON.stringify(output))
}   