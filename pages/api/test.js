import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

export function buildPath() {
    return path.join(process.cwd(), 'data', 'dummy.json')
}

export function getAllData(filePath) {
    const fileData = fs.readFileSync(filePath);
    return JSON.parse(fileData);
}

function handle(req, res) {
    if (req.method === 'POST') {
        const title = req.body.title;
        const id = req.body.id
        const newEvent = {
            id: id,
            description: 'New',
            location: 'Some where',
            date: '2021-05-12',
            title: title,
            isFeatured: true,
            image: 'images/coding-event.jpg'
        }

        const filePath = buildPath()
        const data = getAllData(filePath)
        data.push(newEvent);
        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(201).json({ message: 'Success!', feedback: newEvent })
    } else {
        const filePath = buildPath()
        const data = getAllData(filePath)
        res.status(200).json({ events: data });
    }
}

export default handle