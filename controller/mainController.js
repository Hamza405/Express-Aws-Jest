let cars = ["honda", "bmw", "lancer"];

exports.getRequest = (req, res) => {
  res.send(cars);
};

exports.putRequest = (req, res) => {
  cars.push(req.query.name);
  res.send(cars);
};

exports.deleteRequest = (req, res) => {
  cars.pop();
  res.send(cars);
};

exports.postRequest = (req, res) => {
  cars[req.query.index] = req.query.name;
  res.send(cars);
};
