import resources from "../pages/api/resources-information/[id]";

const { client, clientPromise } = jest.requireActual(
  "../__mocks__/mockMongoDB.js"
);

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

const req = {
  method: "GET",
  query: { id: 1 },
};

const exampleResources = [
  {
    _id: 1,
    id: 1,
    title: "What The Health",
    url: "https://www.whatthehealthfilm.com/",
    description: null,
    image: "/content/whatthehealth.jpg",
    resource_id: 1,
  },
  {
    _id: 2,
    id: 2,
    title: "What",
    url: "https://www.what.com/",
    description: null,
    image: "/content/what.jpg",
    resource_id: 2,
  },
];

describe("resources information", () => {
  beforeAll(async () => {
    const db = client.db("emily-next-website");
    const collection = db.collection("resources-information");

    await collection.insertMany(exampleResources);
  });
  it("should return an individual", async () => {
    await resources(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(exampleResources[0]);
  });
});
