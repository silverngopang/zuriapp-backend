const request = require("supertest");
const app = require("../server");

describe("GET /api/store", () => {
  it("returns store info", async () => {
    const res = await request(app).get("/api/store");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("name");
    expect(res.body).toHaveProperty("totalProducts");
  });
});

describe("GET /api/products", () => {
  it("returns array of products", async () => {
    const res = await request(app).get("/api/products");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe("POST /api/cart/validate", () => {
  it("returns 401 without API key", async () => {
    const res = await request(app).post("/api/cart/validate").send({ items: [] });
    expect(res.statusCode).toBe(401);
  });
});
