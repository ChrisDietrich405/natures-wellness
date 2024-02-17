import clientPromise from "../../../src/config/db";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("emily-website-next");

  if (req.method !== "GET")
    return res.status(405).json({ status: 405, message: "Method not allowed" });
  try {
    const { id } = req.query;

    const resources = await db
      .collection("resources")
      .findOne({ id: Number(id) });
    
    if (!resources) {
      return res.status(404).json({ message: "Resource not found" });
    }

    res.status(200).json(resources);
  } catch (error) {
    return res.status(401).json({ status: 401, message: error });
  }
}
