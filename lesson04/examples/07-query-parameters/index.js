const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const { routeMovies } = require("./routes/movies");
const { tryCatchWrapper } = require("./helpers");

const app = express();

// middlewares
app.use(cors());
app.use(express.json()); // tell express to work with JSON in body
app.use(morgan("dev"));

// routes
app.use("/api/movies", routeMovies);

// 404
app.use((req, res) => {
  res.status(404).json({
    message: "Not Found",
  });
});

// error handling
app.use((err, req, res, next) => {
  if (err.status) {
    return res.status(err.status).json({
      message: err.message,
    });
  }

  console.error("API Error: ", err.message);

  res.status(500).json({
    message: "Internal server error",
  });
});

app.listen(3001, () => {
  console.log("server is listening on port 3001");
});
