import Head from 'next/head'
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
const NewMeetUp = () => {
  const addMeetupHandler = async (meetupData) => {
    const response = fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <Head>
        <title>Add a new Meetup</title>
        <meta
          name="decription"
          content="Add your own meetups"
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};
export default NewMeetUp;
