const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { app } = require("./app");

dotenv.config(); // should be called before you use env variables
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
