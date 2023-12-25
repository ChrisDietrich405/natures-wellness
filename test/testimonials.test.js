// import {describe, expect, test} from '@jest/globals'
// import { testimonialsData } from "../pages/api/testimonials-data";

const clientPromise = require("../src/config/db");

describe("testimonials", () => {
  let client;
  let db;
  beforeEach(async () => {
    client = await clientPromise;
    db = client.db("emily-website-next");
  });
  test("should be testimonials information", async () => {
    const testimonials = await db.collection("testimonials").find({}).toArray();
    expect(typeof testimonials).toBe(typeof []);
  });

  test("should be individual testimonial", async () => {
    const testimonial = await db.collection("testimonials").findOne({ id: 2 });
    expect(testimonial.id).toBe(2);
    expect(typeof testimonial).toBe(typeof {});
  });
});
