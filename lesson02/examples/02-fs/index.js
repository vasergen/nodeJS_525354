// const fs = require("fs"); // NOTE: no promises

const fs = require("node:fs"); // NOTE: no promises

fs.readFile("movies.txt", { encoding: "utf8" }, (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(data);

  fs.readFile("movies2.txt", { encoding: "utf8" }, (err, data2) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    console.log(data2);
  });
});

// DO NOT USE "fs" with callbacks
