import clientPromise from "../../../src/config/db";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("emily-website-next");
  switch (req.method) {
    case "GET":
      try {
        const { id } = req.query;
        const resourcesInformation = await db
          .collection("resources-information")
          .find({ resource_id: Number(id) })
          .toArray();
        console.log(id);
        res.json(resourcesInformation);
        break;
      } catch (error) {
        return res.status(401).json({ status: 401, message: error });
      }
  }
}
