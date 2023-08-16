import MeetupItem from "../../components/meetups/MeetupItem";
import React from "react";

import { ObjectId } from "mongodb";
import db from "../../Data/db";
interface obj {
  id: string;
  image: string;
  title: string;
  address: string;
}
 
const getData = async (id: string) => {
  try {
    const oid = await new ObjectId(id);
    const meetup = await db.findOne({ _id: oid });
    // console.log(meetup);

    if (!meetup) {
      throw new Error("Meetup not found");
    }

    return {
      title: meetup.title,
      image: meetup.image,
      address: meetup.address,
      id: meetup._id.toString(),
    };
  } catch (error) {
    return {
      title: "",
      image: "",
      address: "",
      id: "",
      message: "error occured while retrieving",
    };
  }
};

const page = async ({ params }: { params: { meetupid: string } }) => {
  const mid = params.meetupid;

  const item = await getData(mid);

  return (
    <div>
      {!item.message ? (
        <MeetupItem
          address={item.address}
          id={item.id}
          title={item.title}
          image={item.image}
          key={item.id}
        />
      ) : (
        <h1>Error 404 Not Found</h1>
      )}
    </div>
  );
};

export default page;
