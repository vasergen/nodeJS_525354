const express = require("express");

const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(morgan("dev")); // morgan only logs requests

const movies = [{ id: 1, name: "The Godfather" }];

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.listen(3001, () => {
  console.log("server is listening on port 3001");
});
