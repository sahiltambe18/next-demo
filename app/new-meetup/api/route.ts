import { NextResponse } from 'next/server'

import db from '../../../Data/db'


export async function POST(req: Request) {
    const data = await req.json()
    const response = await db.insertOne(data);
    return NextResponse.json({ message: "meetup saved" },{status:201},).ok

}

export async function GET() {
    return NextResponse.json("heyyo")
}