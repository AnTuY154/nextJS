import Link from 'next/link'
import classes from './event-item.module.css'
function EventItem(props) {
    const { id, title, description, location, date, image, isFeatured } = props.item;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const formatAddress = location.replace(', ', '\n')
    return <li className={classes.item}>
        <img src={`/${image}`} alt={title}></img>
        <div className={classes.content}>
            <div>
                <h2>{title}</h2>
                <div className={classes.date}>
                    <time >{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <address >{formatAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>
                <Link href={`/events/${id}`}>Explore Events</Link>
            </div>

        </div>
    </li>
}


export default EventItem