const fs = require("fs/promises");
const path = require("path");

async function readMovies() {
  // 1
  // const text = await fs.readFile("movies.txt", { encoding: "utf8" }); // error if run node from root dir

  // 2
  const filePath = path.resolve(__dirname, "movies.txt"); // using full path instead of related path
  const text = await fs.readFile(filePath, { encoding: "utf8" }); // error if run node from root dir

  console.log(text);
}

module.exports = {
  readMovies,
};
