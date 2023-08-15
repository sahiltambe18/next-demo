import {MongoClient} from 'mongodb';

let uri = "";

if (process.env.MONGODB_URI) {
    uri = process.env.MONGODB_URI
}



const client = await MongoClient.connect(uri);

const db = client.db().collection("meetups")

export default db;