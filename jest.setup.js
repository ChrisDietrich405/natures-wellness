const { client } = jest.requireActual("./__mocks__/mockMongoDB.js");

// ./src/config/db.js

jest.mock("./src/config/db.js", () => {
  const { clientPromise } = jest.requireActual("./__mocks__/mockMongoDB.js");
  return clientPromise;
});

// ./__mocks__/mockMongoDB.js => ./src/config/db.js

afterAll(async () => {
  await client?.close();
});
