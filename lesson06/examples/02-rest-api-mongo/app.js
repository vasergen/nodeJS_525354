const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const { routerMovies } = require("./routes/movies");
const { tryCatchWrapper } = require("./helpers");

const app = express();

// middlewares
app.use(cors());
app.use(express.json()); // tell express to work with JSON in body
app.use(morgan("dev"));

// routes
app.use("/api/movies", routerMovies);

// 404
app.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

// error handling
app.use((error, req, res, next) => {
  if (error.status) {
    return res.status(error.status).json({
      message: error.message,
    });
  }

  if (error.message.includes("Cast to ObjectId failed for value")) {
    return res.status(400).json({
      message: "id is invalid",
    });
  }

  return res.status(500).json({
    message: "Internal server error",
  });
});

module.exports = {
  app,
};
