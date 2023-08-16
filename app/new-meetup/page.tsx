"use client"
import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import {redirect, useRouter} from 'next/navigation';

const setter = async() =>{
  const res = await fetch("/api",{method:"GET" })
  const data = await res.json();
  console.log(data)
}

const page = () => {

  const router = useRouter()

  interface data {
    title:string,
    description:string,
    image: string,
    address:string,
  }

  setter()

  const newMeetupForm = async (meetupData : data)=>{

   const res = await fetch("/new-meetup/api",{
      method:"POST",
      body: JSON.stringify(meetupData),
      headers:{
        "Content-Type": "application/json"
      },
    })

    
      router.push("/",redirect)
    // redirect("/")
  }

  return (
    <div>
      <NewMeetupForm onAddMeetup={newMeetupForm} />
    </div>
  )
}


export default page

