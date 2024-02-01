import testimonialsData from "./testimonials-data";

export default async function handler(req, res) {
  if (req.method !== "GET")
    return res.status(405).json({ status: 405, message: "Method not allowed" });
  try {
    const testimonials = await testimonialsData();

    res.status(200).json(testimonials);
  } catch (error) {

    return res.status(500).json({ status: 500, message: error });
  }
}
