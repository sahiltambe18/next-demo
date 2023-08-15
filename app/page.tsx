'use client'
import MeetupList from "@/components/meetups/MeetupList";

const meetups = [
  {
    id: "m1",
    title: "meetup 1",
    image:
      "https://punetourism.co.in/images/places-to-visit/headers/top-tourist-places-to-visit-in-pune.jpg",
    address: "isquareit",
  },
  {
    id: "m2",
    title: "meetup 2",
    image:
      "https://media1.thrillophilia.com/filestore/x498v676yykxnwf44q1ulgqrf8rj_wildernesthilltopresort-20230318-0003.jpg?w=305&h=230&dpr",
    address: "isquareit nalanda",
  },
  {
    id: "m3",
    title: "meetup 3",
    image:
      "https://www.fabhotels.com/blog/wp-content/uploads/2018/09/Lakes-Dams-and-Hills.jpg",
    address: "isquareit mithila",
  },
];

import {useSelector} from 'react-redux'

export default function Home() {
  
  interface obj {
    id:string , image:string , title:string,address:string
  }
  const state:obj[] = useSelector((state:{meetup:obj[]})=> state.meetup)


  return (
    <main>
      <MeetupList meetups={state} />
    </main>
  );
}
