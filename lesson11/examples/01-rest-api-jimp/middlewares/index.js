const { HttpError } = require("../helpers");
const jwt = require("jsonwebtoken");
const { User } = require("./../models/user");
const multer = require("multer");
const path = require("path");
const jimp = require("jimp");

const { JWT_SECRET } = process.env;

function validateBody(schema) {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return next(HttpError(400, error.message));
    }

    return next();
  };
}

async function auth(req, res, next) {
  const authHeader = req.headers.authorization || "";
  const [type, token] = authHeader.split(" ");

  if (type !== "Bearer") {
    throw HttpError(401, "token type is not valid");
  }

  if (!token) {
    throw HttpError(401, "no token provided");
  }

  try {
    const { id } = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(id);

    req.user = user;
  } catch (error) {
    if (error.name === "TokenExpiredError" || error.name === "JsonWebTokenError") {
      throw HttpError(401, "jwt token is not valid");
    }
    throw error;
  }

  next();
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(__dirname, "../tmp"));
  },
  filename: function (req, file, cb) {
    cb(null, Math.random() + file.originalname);
  },
});

const upload = multer({
  storage,
  // limits: {},
});

function resize(w, h) {
  return async (req, res, next) => {
    console.log("do resize");
    const { path } = req.file;
    const image = await jimp.read(path);
    await image.resize(w, h);
    await image.writeAsync(path);

    next();
  };
}

module.exports = {
  validateBody,
  auth,
  upload,
  resize,
};
