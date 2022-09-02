const express = require("express");
const {
  getRequest,
  putRequest,
  postRequest,
  deleteRequest,
} = require("../controller/mainController");

const router = express.Router();

router.get("/cars", getRequest);

router.put("/addCar", putRequest);

router.delete("/deleteCar", deleteRequest);

router.post("/updateCars", postRequest);

module.exports = router;
