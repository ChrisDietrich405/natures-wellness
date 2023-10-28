import testimonialsData from "./testimonials-data";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const testimonials = await testimonialsData();

        res.json(testimonials);
        break;
      } catch (error) {
        return res.status(401).json({ status: 401, message: error });
      }
  }
}
