import resources from "../pages/api/resources-information/[id]";
import { resourcesInfoMock } from "../__mocks__/collections";

const { clientPromise } = jest.requireActual("../__mocks__/mockMongoDB.js");

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

const req = {
  method: "GET",
  query: { id: 1 },
};

describe("resources information", () => {
  it("should return an individual resource", async () => {
    await resources(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([resourcesInfoMock[0]]);
  });
  it("should return with a 405 error", async () => {
    await resources({ method: "PUT" }, res);
    expect(res.status).toHaveBeenCalledWith(405);
    expect(res.json).toHaveBeenCalledWith({
      status: 405,
      message: "Method not allowed",
    });
  });
  it("should return with a 500 error", async () => {
    const client = await clientPromise;
    jest.spyOn(client, "db").mockImplementationOnce(() => {
      throw new Error("Simulated error connecting to MongoDB");
    });

    await resources(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
  });
});


