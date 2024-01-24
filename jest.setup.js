jest.mock("./src/config/db.js", () => {
  const { clientPromise } = jest.requireActual("./__mocks__/mockMongoDB.js");

  return clientPromise;
});

// afterAll(async () => {
//   await client?.close();
// });
