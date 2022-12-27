const express = require("express");

const app = express(); // app - usually called like this

// request - object which contains info about http request -> req
// response - object which contains methods to return response -> res

app.get("/movies", (req, res) => {
  res.send("<h1> Movies </h1>");
});

app.get("/", (req, res) => {
  res.send("<h2> Home page </h2>");
});

app.listen(3001, () => {
  console.log("server is listening on port 3001");
});
