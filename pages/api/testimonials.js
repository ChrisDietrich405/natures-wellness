import clientPromise from "../../src/config/db";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("emily-website-next");
  switch (req.method) {
    case "GET":
      try {
        const testimonials = await db
          .collection("testimonials")
          .find({})
          .toArray();
        res.json({ status: 200, data: testimonials });
        break;
      } catch (error) {
        return res.status(401).json({ status: 401, message: error });
      }
  }
}
