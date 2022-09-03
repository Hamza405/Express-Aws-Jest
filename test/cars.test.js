// testing api
const request = require("supertest");
const app = require("../app");
const Car = require("../model/car");

describe("Get Cars success", () => {
  it("should return 200", async () => {
    const response = await request(app).get("/cars");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(3);
  });
});

describe("Delete Cars success", () => {
  it("should deleted the car", async () => {
    const response = await request(app).delete("/deleteCar");
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(2);
  });
});

describe("Add Cars success", () => {
  const newCar = "newCar";
  it("should added the car", async () => {
    const response = await request(app).put(`/addCar?name=${newCar}`);
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBe(3);
    expect(response.body.includes(newCar)).toBe(true);
  });
});
