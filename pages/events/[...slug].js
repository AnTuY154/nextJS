import { useRouter } from "next/router"
import EventList from "../../components/events/event-list";
import { getFilteredEvents } from "../../dummy-data";

export default function EventsFilter() {
    const router = useRouter();
    const filterData = router.query.slug;

    if (!filterData) {
        return <p>Loading</p>
    } else if (filterData.length !== 2) {
        return <p> Invalid Url</p>
    }

    const numYear = +filterData[0]
    const numMonth = +filterData[1]

    if (isNaN(numYear) || isNaN(numMonth) || numMonth < 1 || numMonth > 12) {
        return <p> Invalid Filter</p>
    }

    const filterEvents = getFilteredEvents({
        year: numYear,
        month: numMonth
    })

    if (!filterEvents || filterEvents.length === 0) {
        return <p> No event found</p>
    }

    return (
        <div className="container">
            <EventList items={filterEvents}></EventList>
        </div>
    )
}
