import resources from "../pages/api/resources";

const { client, clientPromise } = jest.requireActual(
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

const exampleResources = [
  {
    _id: 1,
    id: 1,
    name: "shoe",
    active: 1,
    image: "shoe.jpg",
  },
  {
    _id: 2,
    id: 2,
    name: "shoe2",
    active: 1,
    image: "shoe2.jpg",
  },
];

describe("resources", () => {
  beforeAll(async () => {
    const db = client.db("emily-website-next");
    const collection = db.collection("resources");

    await collection.insertMany(exampleResources);
  });

  it("should return with a status of 200", async () => {
    await resources({ method: "GET" }, res);
    console.log("resources", resources);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(jsonMock).toHaveBeenCalledWith(exampleResources);
  });

  it("should return with a status of 405", async () => {
    await resources(req, res )
  })
});
