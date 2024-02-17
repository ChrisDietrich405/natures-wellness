import resources from "../pages/api/resources/[id]";
import {resourcesMock} from "../__mocks__/collections";

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

describe("resources", () => {
  it("should return one resource", async () => {
    await resources(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(resourcesMock[0]);
  });
  it("should return an empty array", async () => {
    const query = { id: 3 };
    await resources({ ...req, query }, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({ message: "Resource not found" });
  });
  it("should return with a status of 405", async () => {
    await resources({ method: "PUT" }, res);
    expect(res.status).toHaveBeenCalledWith(405);
  });
});
