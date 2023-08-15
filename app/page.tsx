"use client";
import MeetupList from "@/components/meetups/MeetupList";
import db from "../Data/db";

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

import { useSelector } from "react-redux";
interface obj {
  id: string;
  image: string;
  title: string;
  address: string;
}

export default async function Home(props: { meetups: obj[] }) {
  // const state:obj[] = useSelector((state:{meetup:obj[]})=> state.meetup)
  // const data = await fetch("/api",{method:'GET'});
  // const meetupsArr = await data.json();

  const state = props.meetups || meetups;

  return (
    <main>
      <MeetupList meetups={state} />
    </main>
  );
}

// export async function getStaticProps() {
//   console.log("working")
//   const data = await fetch("/api",{method:'GET'});
//   const meetups = await data.json();
//   console.log(meetups)
//   return{
//     props:{
//       meetups,
//     },
//   }
// }
export async function getStaticProps() {
  console.log("working");
  const res = await db.find().toArray();
  const meetups = res.map((meetup) => ({
    id: meetup._id.toString(),
    title: meetup.title,
    image: meetup.image,
    description: meetup.description,
    address: meetup.address,
  }));

  return {
    props: {
      meetups,
    },
  };
}
