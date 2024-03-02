import clientPromise from "../../../src/config/db";

export default async function handler(req, res) {
  const client = await clientPromise;
  try {
  const db = client.db("emily-website-next");

  if (req.method !== "GET") {
    return res.status(405).json({ status: 405, message: "Method not allowed" });
  }


    const { id } = req.query;
    const resourcesInformation = await db
      .collection("resources-information")
      .find({ resource_id: Number(id) })
      .toArray();

    return res.status(200).json(resourcesInformation);
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
}
