const { MongoClient } = require("mongodb");

const uri = global.__MONGO_URI__;
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

let client;
let clientPromise;

client = new MongoClient(uri, options);
clientPromise = client.connect();

module.exports = { clientPromise, client };
