const express = require("express");

const app = express(); // app - usually called like this

// request - object which contains info about http request -> req
// response - object which contains methods to return response -> res

const movies = [{ id: 1, name: "The Godfather" }];

app.get("/movies", (req, res) => {
  res.json(movies);
  // res.body(null);
  // res.json(null);
});

app.listen(3001, () => {
  console.log("server is listening on port 3001");
});
