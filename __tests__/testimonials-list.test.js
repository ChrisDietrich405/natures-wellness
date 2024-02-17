import testimonials from "../pages/api/testimonials";

const { client, clientPromise } = jest.requireActual(
  "../__mocks__/mockMongoDB.js"
);

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

const req = {
  method: "GET",
};

const exampleTestimonials = [
  {
    _id: 1,
    id: 1,
    name: "~ Frank B",
    active: 1,
    testimonial:
      "The 8 week weight loss and wellness program with Emily has helped tran…",
    city: "Ellicott City",
  },
  {
    _id: 2,
    id: 2,
    name: "~ Flavio",
    active: 1,
    testimonial: "Eu sou o melhor",
    city: "Ellicott",
  },
];

describe("testimonials", () => {
  beforeAll(async () => {
    const db = client.db("emily-website-next");
    const collection = db.collection("testimonials");

    await collection.insertMany(exampleTestimonials);
  });
 

  it("should return with a status code of 200", async () => {
    await testimonials({ method: "GET" }, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(exampleTestimonials);
  });

  it("should return with a status code of 405", async () => {
    await testimonials({ method: "PUT" }, res);
    expect(res.status).toHaveBeenCalledWith(405);
  });

  it("should respond with an error because no collection was found", async () => {
    jest.spyOn(await clientPromise, "db").mockImplementationOnce(() => {
      throw new Error("Simulated error connecting to MongoDB");
    });

    await testimonials(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
  });
});
