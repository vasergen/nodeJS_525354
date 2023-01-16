const express = require("express");
const { tryCatchWrapper } = require("../helpers/index.js");
const { createMovie, deleteMovie, getMovie, getMovies } = require("../controllers/movies.controller");
const { validateBody } = require("../middlewares");
const { addMovieSchema } = require("../schemas/movies");
const routerMovies = express.Router();

routerMovies.get("/", tryCatchWrapper(getMovies));
routerMovies.get("/:id", tryCatchWrapper(getMovie));
routerMovies.post("/", validateBody(addMovieSchema), tryCatchWrapper(createMovie));
routerMovies.delete("/:id", tryCatchWrapper(deleteMovie));

module.exports = {
  routerMovies,
};
