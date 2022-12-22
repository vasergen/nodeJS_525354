// const fs = require("fs/promises");
const fs = require("node:fs/promises");

async function main() {
  try {
    // const data = await fs.readFile("movies.txt", { encoding: "utf8" });
    // console.log(data);
    // const data2 = await fs.readFile("movies2.txt");
    // console.log(data2);

    // overwrite file every time
    //await fs.writeFile("movies2.txt", "Line2");
    // await fs.writeFile("movies2.txt", "Line3");

    // add to the end of the file
    await fs.appendFile("movies2.txt", "Line1\n");
    await fs.appendFile("movies2.txt", "Line2\n");

    // remove
    await fs.unlink("movies2.txt");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}
main();
