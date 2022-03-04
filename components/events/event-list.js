import EventItem from "./event-item";
import classes from './event-list.module.css'

function EventList(props) {
    const { items } = props;
    return <ul className={classes.list}>
        {items.map((item) => (
            <EventItem item={item} key={item.id}></EventItem>
        ))}
    </ul>
}


export default EventList