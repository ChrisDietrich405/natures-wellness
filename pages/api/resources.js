import resourcesData from "./resources-data";

export default async function handler(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ status: 405, message: "Method not allowed" });
  try {
    const resources = await resourcesData();
    res.status(200).json(resources);
  } catch (error) {
    return res.status(500).json({ status: 500, message: error });
  }
}
