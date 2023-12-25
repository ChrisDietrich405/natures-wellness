const clientPromise = require("../src/config/db");

describe("resources", () => {
  let client;
  let db;
  beforeEach(async () => {
    client = await clientPromise;
    db = client.db("emily-website-next");
  });
  test("should be resources information", async () => {
    const resources = await db.collection("resources").find({}).toArray();
    expect(typeof resources).toBe(typeof []);
  });
  test("should get one individual resource", async () => {
    const resource = await db.collection("resources").findOne({ id: 2 });
    expect(resource.id).toBe(2);
    expect(typeof resource).toBe(typeof {});
  });
});
