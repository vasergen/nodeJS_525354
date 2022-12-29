const express = require("express");
const db = require("../db/db.js");
const { HttpError } = require("../helpers/index.js");

const routeMovies = express.Router();

routeMovies.get("/", async (req, res) => {
  const movies = await db.listMovies();
  console.log("movies:", movies);
  res.json(movies);
});

routeMovies.get("/:id", async (req, res, next) => {
  const { id } = req.params;
  const movie = await db.getMovie(id);

  if (!movie) {
    return next(HttpError(404, "Movie not found"));
  }
  return res.json(movie);
});

// routeMovies.post("/", (req, res) => {
//   const newMovie = { id: 2, name: "Movie 2" };
//   movies.push(newMovie);

//   res.status(201).json(newMovie);
// });

// routeMovies.put("/1", (req, res) => {
//   // update movie by id
//   res.status(200).json({ id: 1, name: "The Godfather" });
// });

// routeMovies.delete("/1", (req, res) => {
//   // update movie by id
//   res.status(200).json({ id: 1, name: "The Godfather" });
//   // res.status(204).json({});
// });

module.exports = {
  routeMovies,
};
