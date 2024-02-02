import clientPromise from "../../src/config/db";

export default async function resourcesData () {
  const client = await clientPromise;

  const db = client.db("emily-website-next");

  const resources = await db.collection("resources").find({}).toArray();
  return resources
};
