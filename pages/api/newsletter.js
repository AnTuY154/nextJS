
import { connectDB } from '../../helper/mongodb'

async function handler(req, res) {
    if (req.method === 'POST') {
        const userEmail = req.body.email;

        if (!userEmail || !userEmail.includes('@')) {
            res.status(422).json({ message: 'Invalud email address' });
            return;
        }
        const client = await connectDB();
        const db = client.db();
        await db.collection('email').insertOne({ email: userEmail })
        client.close();
        res.status(201).json({ message: 'Signed up!' });
    }
}

export default handler