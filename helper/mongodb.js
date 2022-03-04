import { MongoClient } from "mongodb";

const connectString = 'mongodb+srv://tuandta1:Kiendaika9x@cluster0.x1lmm.mongodb.net/events?retryWrites=true&w=majority'

export async function connectDB() {
    const client = MongoClient.connect(connectString);
    return client;
}

export async function insertDocument(client, document, collection) {
    const db = client.db();
    await db.collection(collection).insertOne(document)
}