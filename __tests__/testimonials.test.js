import testimonials from "../pages/api/testimonials";

const { client } = jest.requireActual("../__mocks__/mockMongoDB");

jest.mock("../__mocks__/mockMongoDB", () => {
  const { clientPromise } = jest.requireActual("../__mocks__/mockMongoDB");
  return {
    __esModule: true,
    default: clientPromise,
  };
});

const jsonMock = jest.fn();

const res = {
  json: jsonMock,
};

const req = {
  method: "GET",
};

describe("testimonials", () => {
  it("should return collection from db", async () => {
    await testimonials(req, res);
    expect(jsonMock).toHaveBeenCalledWith();
  });
});
