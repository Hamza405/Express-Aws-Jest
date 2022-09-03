const express = require("express");
const app = express();
const api = require("./api/api");
const port = 8080;

app.use(api);

app.listen(port, () => {
  console.log("App running on http://localhost:" + port);
});

module.exports = app;
