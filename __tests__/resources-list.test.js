import resources from "../pages/api/resources";
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
};

describe("resources", () => {

  it("should return with a status of 200", async () => {
    await resources({ method: "GET" }, res);
    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(resourcesMock);
  });

  it("should return with a status of 405", async () => {
    await resources({ method: "PUT" }, res);
    expect(res.status).toHaveBeenCalledWith(405);
  });

  it("should return with a status 500", async () => {
    const client = await clientPromise;

    jest.spyOn(client, "db").mockImplementationOnce(() => {
      throw new Error("Forced server error");
    });
    await resources(req, res);
    expect(res.status).toHaveBeenCalledWith(500);
  });
});
