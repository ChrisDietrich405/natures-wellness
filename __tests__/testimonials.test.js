import testimonials from "../pages/api/testimonials";
import clientPromise from "../src/config/db";

const { client } = jest.requireActual(
  "../__mocks__/mockMongoDB.js"
);

const jsonMock = jest.fn();

const res = {
  json: jsonMock,
  status: jest.fn(() => ({ json: jsonMock })),
};

const req = {
  method: "GET",
};

describe("testimonials", () => {
  beforeAll(async () => {
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

    const db = client.db("emily-website-next");
    const collection = db.collection("testimonials");

    await collection.insertMany(exampleTestimonials);
  });

  it("should return with a status code of 405", async () => {
    await testimonials({ method: "PUT" }, res);
    expect(res.status).toHaveBeenCalledWith(405);
  });
  it.only("should respond with an error because no collection was found", async () => {
    const client = await clientPromise
    client.mockImplementationOnce(() => {
      throw new Error("no collection found")
    });
    // const db = clientMock.db("emily-website-next");

    // const collectionSpy = jest.spyOn(db, "collection");
    

    // collectionSpy.mockImplementationOnce(() => {
    //   throw new Error("Testimonials not found");
    // });

    await testimonials(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
  });
});
