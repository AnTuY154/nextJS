import Link from 'next/link'
import Button from '../ui/button';
import classes from './event-item.module.css'
import CustomerIcon from '../icons/myIcon'
import Image from "next/image";

function EventItem(props) {
    const { id, title, description, location, date, image, isFeatured } = props.item;
    const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    const formatAddress = location.replace(', ', '\n')
    return <li className={classes.item}>
        <Image src={`/${image}`} alt={title} width={240} height={160}></Image>
        {/* <img src={`/${image}`} alt={title}></img> */}
        <div className={classes.content}>
            <div>

                <h2>{title}</h2>
                <div className={classes.date}>
                    <CustomerIcon.DateIcon></CustomerIcon.DateIcon>
                    <time >{humanReadableDate}</time>
                </div>
                <div className={classes.address}>
                    <CustomerIcon.LocationIcon></CustomerIcon.LocationIcon>
                    <address >{formatAddress}</address>
                </div>
            </div>
            <div className={classes.actions}>

                <Button link={`/events/${id}`}>
                    <span>Explore events</span>
                    <span className={classes.icon}>
                        <CustomerIcon.ArrowIcon></CustomerIcon.ArrowIcon>
                    </span>
                </Button>


                {/* <Link href={`/events/${id}`}>Explore Events</Link> */}
            </div>

        </div>
    </li>
}


export default EventItem