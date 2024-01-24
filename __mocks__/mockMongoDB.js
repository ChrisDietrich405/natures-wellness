const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URL;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

if (!process.env.MONGO_URL) {
  throw new Error("Add Mongo URI to .env.local");
}

client = new MongoClient(global.__MONGO_URI__, options);
clientPromise = client.connect();

module.exports = { clientPromise, client };
