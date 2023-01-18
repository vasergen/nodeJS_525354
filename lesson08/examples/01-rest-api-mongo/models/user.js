const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    email: {
      type: String,
      unique: true, // unique -> will create an index in mongoose
      match: [/[a-z0-9]+@[a-z0-9]+/, "user email is not valid!"], // simple check
    },
    password: {
      type: String,
      minLength: [6, "password should be at least 6 characters long"],
    },
    movies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movie",
      },
    ],
  },
  {
    timestamps: true, // adds createdAt and updatedAt fields
    versionKey: false,
  }
);

const User = mongoose.model("user", schema);

module.exports = {
  User,
};
