import Head from 'next/head'
import { getFeaturedEvents } from '../dummy-data'
import EventList from '../compoents/events/event-list';
export default function Home() {
  const featureEvent = getFeaturedEvents();
  console.log(featureEvent)
  return (
    <div className="container">
      <EventList items={featureEvent}></EventList>
    </div>
  )
}
