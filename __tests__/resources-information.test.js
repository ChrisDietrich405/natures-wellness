import resources from "../pages/api/resources-information/[id]";
import {resourcesInfoMock} from "../__mocks__/collections";

const res = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

const req = {
  method: "GET",
  query: { id: 1 },
};

describe("resources information", () => {
  it("should return an individual", async () => {
    await resources(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([ resourcesInfoMock[0] ]);
  });
});
