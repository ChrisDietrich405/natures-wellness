import { MongoClient } from "mongodb";
import {resourcesMock} from "./collections";

let client;
let clientPromise;

if (!process.env.MONGO_URL) {
  throw new Error("Add Mongo URI to .env.local");
}

client = new MongoClient(global.__MONGO_URI__);
clientPromise = client.connect();

module.exports = { clientPromise, client };
