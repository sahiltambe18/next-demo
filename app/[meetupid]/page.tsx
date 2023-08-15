'use client'
import MeetupItem from '@/components/meetups/MeetupItem'
import React from 'react'

import {useSelector} from 'react-redux'

interface obj {
  id:string , image:string , title:string,address:string
}

const page = ({params}:{params:{meetupid:string}}) => {
  

  const mid = params.meetupid

  const item = useSelector((state:{meetup:obj[]})=>state.meetup.find(Item=> Item.id===mid))

  console.log(item)



  return (
    <div>
      {item ? <MeetupItem address={item.address} id={item.id} title={item.title} image={item.image} key={item.id} /> :(
        <h1>Error 404 Not Found</h1>
      )}
    </div>
  )
}

export default page
