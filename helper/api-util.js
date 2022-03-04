export async function getAllEvevnts() {
    const response = await fetch('https://nextjs-a0b94-default-rtdb.firebaseio.com/events.json')
    const data = await response.json();

    const events = [];
    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        });
    }

    return events;
}

export async function getFeaturedEvents() {
    const allEvents = await getAllEvevnts();
    return allEvents.filter((item) => item.isFeatured);
}