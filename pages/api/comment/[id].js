
import { getAllData, buildPath } from "../test"
import fs from 'fs';
import { connectDB, insertDocument } from '../../../helper/mongodb'

async function handler(req, res) {
    if (req.method === 'POST') {
        const id = req.query.id;
        const newComment = req.body.newComment

        const filePath = buildPath()
        const data = getAllData(filePath)
        const index = data.findIndex((item) => item.id === id)
        if (index !== -1) {
            const newCommentFinal = { ...newComment, id: data[index].listComment[data[index].listComment.length - 1].id + 1 }
            const newData = { ...data[index], listComment: [...data[index].listComment, newCommentFinal] }
            data[index] = newData

        }
        fs.writeFileSync(filePath, JSON.stringify(data));

        const newCommentDB = {
            ...newComment,
            eventID: id
        }
        const client = await connectDB();
        await insertDocument(client, newCommentDB, 'comment')
        const listComment = await client.db().collection('comment').find({ eventID: id }).toArray();

        // const db = client.db();
        // await db.collection('comment').insertOne(newCommentDB)
        client.close();
        res.status(201).json({ message: 'Success!', listComment: listComment })
    } else if (req.method === 'GET') {

        const client = await connectDB();
        const db = client.db();
        const listComment = await db.collection('comment').find({ eventID: req.query.id }).toArray();
        client.close();



        const id = req.query.id;
        const filePath = buildPath();
        const data = getAllData(filePath);
        const event = data.find((item) => item.id === id);

        res.status(200).json({ event: event, listComment: listComment })
    }

}

export default handler