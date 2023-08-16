import MeetupList from "@/components/meetups/MeetupList";
import { GetStaticProps } from "next";

interface Meetup {
  id: string;
  title: string;
  image: string;
  address: string;
}

interface HomeProps {
  meetups: Meetup[];
}

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  try {
    console.log("Fetching meetups...");
    const response = await fetch("/api", { method: "GET" });
    const meetupsArr = await response.json();

    console.log("Fetched meetups:", meetupsArr);

    return {
      props: {
        meetups: meetupsArr,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        meetups: [],
      },
    };
  }
};

const Home = ({ meetups }: HomeProps) => {
  console.log(meetups)
  return <main>{meetups && <MeetupList meetups={meetups} />}</main>;
};

export default Home;
