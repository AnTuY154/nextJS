import Head from 'next/head'
import { getFeaturedEvents } from '../helper/api-util'
import EventList from '../components/events/event-list';
import NewsletterRegistration from '../components/input/newsletter-registration';
export default function Home(props) {
  return (
    <div className="container">
      <Head>
        <title>Trang Chu</title>
        <meta name="des" content='NextJS'></meta>
      </Head>
      <NewsletterRegistration></NewsletterRegistration>
      <EventList items={props.data}></EventList>
    </div>
  )
}

export async function getStaticProps() {
  const data = await fetch('http://localhost:3000/api/test', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  // const featureEvent = await getFeaturedEvents();
  const events = await data.json();
  if (events) {
    return {
      props: {
        data: events.events
      }
    }
  } else {
    return {
      notFound: true
    }
  }

}
