import { useRouter } from "next/router"
import { Fragment, useEffect, useState } from "react";
import EventContent from "../../components/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-summary";
import { getAllEvents, getEventById } from "../../dummy-data";
import Comment from "../../components/input/comment";
export default function EventsDetail(props) {
    const { data, listComment } = props

    return data ? (
        <Fragment>
            <EventSummary title={data?.title} />
            <EventLogistics data={data} />
            <EventContent ><p>{data?.description}
            </p></EventContent>
            <Comment listCommentDB={listComment} data={data}></Comment>
        </Fragment>
    ) : (<div>404</div>)
}

// export async function getStaticProps(context) {
//     const { params } = context;
//     const data = getEventById(params.id)
//     return {
//         props: {
//             data: data
//         },
//         revalidate: 10,
//         // notFound:true,
//         // redirect:'/404'
//     }
// }

// export async function getStaticPaths() {
//     const data = getAllEvents();
//     const paths = [];
//     data.map((item) => {
//         paths.push({
//             params: {
//                 id: item.id
//             }
//         })
//     })
//     return {
//         paths: paths,
//         fallback: false
//     }
// }

export async function getServerSideProps(context) {
    const { params } = context;
    // const data = getEventById(params.id)
    const data = await fetch(`http://localhost:3000/api/comment/${params.id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    })
    // const featureEvent = await getFeaturedEvents();
    console.log(data)
    const events = await data.json();

    if (events.event) {
        return {
            props: {
                data: events.event,
                listComment: events.listComment
            },
            // revalidate: 10

            // notFound:true,
            // redirect:'/404'
        }
    } else {
        return {
            notFound: true,
        }
    }
}