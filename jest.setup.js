import {initializeDatabase} from './__mocks__/mockMongoInit.ts';

const { client } = jest.requireActual("./__mocks__/mockMongoDB.js");

jest.mock("./src/config/db.js", () => {
  const { clientPromise } = jest.requireActual("./__mocks__/mockMongoDB.js");
  return clientPromise;
});

beforeAll(async () => {
  const db = client.db("emily-website-next");
  await initializeDatabase(db);
});

afterAll(async () => {
  await client?.close();
});


