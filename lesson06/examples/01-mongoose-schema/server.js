const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
mongoose.set("strictQuery", false);
mongoose.set("debug", true); // enable logging

const { HOST_URI } = process.env;

async function main() {
  try {
    await mongoose.connect(HOST_URI);
    console.log("Connected to mongodb!");

    // Schema
    const schema = mongoose.Schema(
      {
        title: {
          type: String, // mongoose.Types.String,
          required: true,
          unique: true,
          minLength: [5, "it is too short!!"],
        },
        year: {
          // 2023
          type: String,
          // match: /\d{4}/,
        },
        // genre: {
        //   type: String,
        //   enum: ["action", "drama"],
        //   required: true,
        // },

        genre: {
          type: [String],
          enum: ["action", "drama"],
          required: true,
        },
        favorite: {
          type: Boolean,
          default: false,
        },
      },
      {
        versionKey: false,
        timestamps: true,
      }
    );

    // Model (Class)
    const Movie = mongoose.model("movie", schema);

    // save new movie into db
    const savedMovie = await Movie.create({
      title: "The godfather 8",
      year: "20231",
      genre: ["action"],
    });
    console.log("create new movie", savedMovie);

    // read all from db
    // const movies = await Movie.find({});
    // console.log("movies", movies);

    // read using filter
    // const movies = await Movie.find({ title: "new Movie" });
    // console.log("movies", movies);

    // find one
    // const movie = await Movie.findOne({ title: "new Movie" });
    // console.log("movie", movie);

    // find by id
    // const movie = await Movie.findOne({ _id: "63bef70450fb7aba69ba1d2e" });
    // const movie = await Movie.findById("63bef70450fb7aba69ba1d2e");
    // console.log("movie", movie);

    // update
    // const movie = await Movie.findByIdAndUpdate(
    //   "63bef70450fb7aba69ba1d2e",
    //   {
    //     title: "updated title 3",
    //   },
    //   { new: true }
    // );
    // console.log("updated movie", movie);

    // remove
    // const movie = await Movie.findByIdAndRemove("63bef70450fb7aba69ba1d2e");
    // console.log("deleted movie", movie);
  } catch (error) {
    console.error("Error:", error.message);
    process.exit(1);
  }
}

main();
