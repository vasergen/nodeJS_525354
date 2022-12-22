const fs = require("node:fs");

function handleFile(err, data) {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("got data", data);

  const end = Date.now() + 5000;
  while (Date.now() < end) {} // block event loop
  console.log("handle file end!");
}

console.log("Start");
fs.readFile("movies.txt", { encoding: "utf8" }, handleFile);
fs.readFile("movies.txt", { encoding: "utf8" }, handleFile);

console.log("Finish");
