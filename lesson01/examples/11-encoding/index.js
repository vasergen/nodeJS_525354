const fs = require("fs/promises");

async function main() {
  const text = await fs.readFile("./text.log", { encoding: "utf8" });
  console.log(text);
}
main();
