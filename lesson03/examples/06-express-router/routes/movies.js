const express = require("express");

const routeMovies = express.Router();

const movies = [{ id: 1, name: "The Godfather" }];

routeMovies.get("/", (req, res) => {
  res.json(movies);
});

routeMovies.post("/", (req, res) => {
  const newMovie = { id: 2, name: "Movie 2" };
  movies.push(newMovie);

  res.status(201).json(newMovie);
});

routeMovies.put("/1", (req, res) => {
  // update movie by id
  res.status(200).json({ id: 1, name: "The Godfather" });
});

routeMovies.delete("/1", (req, res) => {
  // update movie by id
  res.status(200).json({ id: 1, name: "The Godfather" });
  // res.status(204).json({});
});

module.exports = {
  routeMovies,
};
