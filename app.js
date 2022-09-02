const express = require("express");
const app = express();
const port = 3000;

let cars = ["honda", "bmw", "lancer"];
app.get("/cars", (req, res) => {
  res.send(cars);
});

app.put("/addCar", (req, res) => {
  cars.push(req.query.name);
  res.send(cars);
});

app.delete("/deleteCar", (req, res) => {
  cars.pop();
  res.send(cars);
});

app.post("/updateCars", (req, res) => {
  cars[req.query.index] = req.query.name;
  res.send(cars);
});

app.listen(port, () => {
  console.log("App running on http://localhost:" + port);
});
