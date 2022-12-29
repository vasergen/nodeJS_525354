const express = require("express");

const morgan = require("morgan");
const cors = require("cors");
const { routeMovies } = require("./routes/movies");
const { tryCatchWrapper } = require("./helpers");

const app = express();

// middlewares
app.use(cors());
app.use(morgan("dev"));

// serve static
app.use("/", express.static("public"));
// app.use("/public", express.static("public"));

// redirects
app.get("/home", (req, res) => {
  res.send("<h2> Home </h2>");
});

app.get("/myhome", (req, res) => {
  res.redirect(302, "/home");
});

// error
app.get("/api/error", (req, res) => {
  // ...some logic
  throw new Error("Something bad happened!");
});

app.get("/api/error2", async (req, res, next) => {
  // ...some logic
  // await ...

  try {
    throw new Error("Something bad happened in async function!");
  } catch (error) {
    next(error);
  }
});

app.get(
  "/api/error3",
  tryCatchWrapper(async (req, res, next) => {
    throw new Error("Something bad happened in async function!!");
  })
);

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
