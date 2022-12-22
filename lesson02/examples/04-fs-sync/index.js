const fs = require("node:fs");

async function main() {
  const data = fs.readFileSync("movies.txt", { encoding: "utf8" });
  console.log(__filename, data);
}
main();

// DO NOT use *Sync functions
