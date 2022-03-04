import { useRouter } from "next/router";
import { useRef } from "react";

export default function AddEvent() {
    const titleRef = useRef();
    const idRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const title = titleRef.current.value;
        const id = idRef.current.value;
        const reqBody = { title: title, id: id }
        console.log(reqBody)
        fetch('/api/test', {
            method: 'POST',
            body: JSON.stringify(reqBody),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <div >
                    <label htmlFor="id">ID</label>
                    <input id="id" ref={idRef}></input>
                </div>
                <div >
                    <label htmlFor="title">Title</label>
                    <input id="title" ref={titleRef}></input>
                </div>
                <button type="submit">Add Event</button>
            </form>
        </>

    )
}


