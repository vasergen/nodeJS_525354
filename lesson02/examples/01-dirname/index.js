const { readMovies } = require("./movies/readMovies");

async function main() {
  // console.log(__dirname); // full path // NOTE: __dirname works in CommonJS only

  readMovies();
}
main();
