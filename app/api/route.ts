import { NextResponse } from "next/server";
import db from '../../Data/db'
export async function GET() {
    console.log("api hitted")
    const res = await db.find().toArray();
    const meettups = res.map( meetup => ({id:meetup._id.toString() , title:meetup.title , image:meetup.image , description:meetup.description , address:meetup.address}))
    return NextResponse.json(meettups)
}