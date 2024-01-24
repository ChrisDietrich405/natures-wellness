import clientPromise from "../../src/config/db";

export default async function testimonialsData() {
  const client = await clientPromise;

  const db = client.db("emily-website-next");

  const testimonials = await db.collection("testimonials").find({}).toArray();
  return testimonials;
}
