import MeetupList from "@/components/meetups/MeetupList";
import db from '../Data/db'
// interface Meetup {
//   id: string;
//   title: string;
//   image: string;
//   address: string;
// }

// interface HomeProps {
//   meetups: Meetup[];
// }

const getData = async () => {
  const res = await db.find().toArray();
  const meettups = res.map((meetup) => ({
    id: meetup._id.toString(),
    title: meetup.title,
    image: meetup.image,
    description: meetup.description,
    address: meetup.address,
  }));
  

  return meettups;
};

const Home = async () => {
  const state = await getData();
  return <main>{state && <MeetupList meetups={state} />}</main>;
};

export default Home;
