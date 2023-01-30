require("dotenv").config();

const mongoose = require("mongoose");
const { app } = require("./app");
// mongoose.set("debug", true);

mongoose.set("strictQuery", false);

const { HOST_URI } = process.env;

async function main() {
  try {
    await mongoose.connect(HOST_URI);
    console.log("connected to db");

    app.listen(3001, () => {
      console.log("server is listening on port 3001");
    });
  } catch (error) {
    console.error("main failed:", error.message);
  }
}
main();
