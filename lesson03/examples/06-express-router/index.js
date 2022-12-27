const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const { routeMovies } = require("./routes/movies");

const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));

// routes
app.use("/api/movies", routeMovies);

app.listen(3001, () => {
  console.log("server is listening on port 3001");
});
