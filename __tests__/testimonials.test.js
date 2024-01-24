import testimonials from "../pages/api/testimonials";

const { client } = jest.requireActual("../__mocks__/mockMongoDB.js");

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
        id: 1,
        name: "~ Frank B",
        active: 1,
        testimonial:
          "The 8 week weight loss and wellness program with Emily has helped tran…",
        city: "Ellicott City",
      },
      {
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

  it("should return collection from db", async () => {
    await testimonials(req, res);
    expect(res.json).toHaveBeenCalledWith({
      // testimonials: expect.arrayContaining([
      //   expect.objectContaining({
      //     id: 1,
      //     name: "~ Frank B",
      //     active: 1,
      //     testimonial:
      //       "The 8 week weight loss and wellness program with Emily has helped tran…",
      //     city: "Ellicott City",
      //   }),
      //   expect.objectContaining({
      //     id: 2,
      //     name: "~ Flavio",
      //     active: 1,
      //     testimonial: "Eu sou o melhor",
      //     city: "Ellicott",
      //   }),
      // ]),
      // status: 200,
    });
  });
});
