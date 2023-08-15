"use client"
import React from 'react'
import NewMeetupForm from '../../components/meetups/NewMeetupForm';
import {addMeetup} from '../../store/MeetupSlice'
import {useDispatch} from 'react-redux'
import {useRouter} from 'next/navigation';

const page = () => {

  const dispatch = useDispatch();
  const router = useRouter()

  interface data {
    title:string,
    description:string,
    image: string,
    address:string,
  }

  const newMeetupForm = async (meetupData : data)=>{

   const res = await fetch("/new-meetup/api",{
      method:"POST",
      body: JSON.stringify(meetupData),
      headers:{
        "Content-Type": "application/json"
      },
    })

    if (res.ok || (res.status===201)) {
      router.push("/")
    }

  }

  return (
    <div>
      <NewMeetupForm onAddMeetup={newMeetupForm} />
    </div>
  )
}


export default page

