const { User } = require("../models/user");
const { BadRequest } = require("http-errors");

async function createMovie(req, res, next) {
  const { user } = req;
  const { id: movieId } = req.body;

  user.movies.push({ _id: movieId });
  // const updatedUser = await User.findByIdAndUpdate(user._id, user, {
  //   new: true,
  //   fields: {
  //     movies: 1
  //   },
  // });

  const updatedUser = await User.findByIdAndUpdate(user._id, user, {
    new: true,
  }).select({
    movies: 1,
    _id: 0,
  });

  console.log("updatedUser", updatedUser);

  return res.status(201).json({
    data: {
      movies: updatedUser.movies,
    },
  });
}

async function getMovies(req, res, next) {
  const { user } = req;
  const userWithMovies = await User.findById(user._id).populate("movies", { title: 1, year: 1, _id: 1 });

  return res.status(200).json({
    data: {
      movies: userWithMovies.movies,
    },
  });
}

async function me(req, res, next) {
  const { user } = req;
  const { email, _id: id } = user;

  return res.status(200).json({
    data: {
      user: {
        email,
        id,
      },
    },
  });
}

async function verifyEmail(req, res, next) {
  const { token } = req.params;
  const user = await User.findOne({
    verifyToken: token,
  });

  if (!user) {
    throw BadRequest("Verify token is not valid!");
  }

  await User.findByIdAndUpdate(user._id, {
    verified: true,
    verifyToken: null,
  });

  return res.json({
    message: "Success",
  });
}

module.exports = {
  createMovie,
  getMovies,
  me,
  verifyEmail,
};
