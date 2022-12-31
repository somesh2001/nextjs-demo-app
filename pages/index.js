import { MongoClient } from "mongodb";
import Head from 'next/head'
import MeetupList from "../components/meetups/MeetupList";


const HomePage = (props) => {

  return (
    <>
    <Head>
      <title>
        React App 
      </title>
      <meta name="decription" content="Browse a huge list of highly active react meetups" />
    </Head>
        <MeetupList meetups={props.meetups} />
    </>
  );
};

export async function getStaticProps(){

  const client = await MongoClient.connect(
    'mongodb+srv://root:root@cluster0.ns5ctga.mongodb.net/?retryWrites=true&w=majority'
  );
  const db = client.db();

  const meetupsCollection = db.collection('meetups');
  const meetupsData = await meetupsCollection.find().toArray();
  client.close();

  return{
    props:{
      meetups: meetupsData.map(meetup => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString()
      })
      )
    }
  }
}

export default HomePage;
