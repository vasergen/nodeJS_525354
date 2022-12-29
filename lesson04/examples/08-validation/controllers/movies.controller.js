const db = require("../db/db.js");
const { HttpError } = require("../helpers/index.js");
const Joi = require("joi");

async function getMovies(req, res) {
  const { limit } = req.query;
  console.log("limit:", limit);
  const movies = await db.listMovies({ limit });
  res.json(movies);
}

async function getMovie(req, res, next) {
  const { id } = req.params;
  const movie = await db.getMovie(id);

  if (!movie) {
    return next(HttpError(404, "Movie not found"));
  }
  return res.json(movie);
}

async function createMovie(req, res, next) {
  const { title } = req.body;
  const newMovie = await db.addMovie(title);
  res.status(201).json(newMovie);
}

async function deleteMovie(req, res, next) {
  const { id } = req.params;
  const movie = await db.getMovie(id);
  if (!movie) {
    return next(HttpError(404, "No movie"));
  }
  await db.removeMovie(id);
  return res.status(200).json(movie);
}

module.exports = {
  getMovie,
  getMovies,
  createMovie,
  deleteMovie,
};
