const clientPromise = require("../src/config/db");

describe("resources information", () => {
  let client;
  let db;
  beforeEach(async () => {
    client = await clientPromise;
    db = client.db("emily-website-next");
  });
  test("should get all the information", async () => {
    const data = await db.collection("resource-information").find({}).toArray();
    expect(typeof data).toBe(typeof []);
  });
  test("should get one individual resource information", async () => {
    const individualData = await db
      .collection("resources-information")
      .findOne({ id: 3 });
    expect(typeof individualData).toBe(typeof {});
    expect(individualData.id).toBe(3);
  });
});


