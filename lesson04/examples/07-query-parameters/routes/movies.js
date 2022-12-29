const express = require("express");
const db = require("../db/db.js");
const { HttpError } = require("../helpers/index.js");

const routeMovies = express.Router();

routeMovies.get("/", async (req, res) => {
  const { limit } = req.query;
  console.log("limit:", limit);
  const movies = await db.listMovies({ limit });
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

routeMovies.post("/", async (req, res) => {
  const { title } = req.body;
  const newMovie = await db.addMovie(title);
  res.status(201).json(newMovie);
});

routeMovies.delete("/:id", async (req, res, next) => {
  const { id } = req.params;
  const movie = await db.getMovie(id);
  if (!movie) {
    next(HttpError(404, "No movie"));
  }
  await db.removeMovie(id);
  res.status(200).json(movie);
});

module.exports = {
  routeMovies,
};
