import clientPromise from "../../../src/config/db";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("emily-website-next");
  switch (req.method) {
    case "GET":
      try {
        const { id } = req.query;
   
        const resources = await db
          .collection("resources")
          .findOne({ id: Number(id) });

        res.json(resources);
      } catch (error) {
        return res.status(401).json({ status: 401, message: error });
      }
  }
}
