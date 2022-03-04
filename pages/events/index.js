import { useRouter } from "next/router";
import EventList from "../../components/events/event-list";
import EventSearch from "../../components/events/event-search";
import { getAllEvents } from "../../dummy-data"
export default function Events() {
    const router = useRouter();
    const allEvevnts = getAllEvents();

    const handSearch = (year, month) => {
        router.push(`/events/${year}/${month}`)
    }
    return (
        <>
            <EventSearch onSearch={handSearch}></EventSearch>
            <EventList items={allEvevnts}></EventList>
        </>

    )
}
