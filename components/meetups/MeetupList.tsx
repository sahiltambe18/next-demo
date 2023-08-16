'use client'
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.css';



interface obj {
  id:string , image:string , title:string,address:string
}

function MeetupList({meetups}:{meetups:obj[]}) {
  
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
