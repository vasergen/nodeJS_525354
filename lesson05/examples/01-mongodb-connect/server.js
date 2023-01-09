const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

// DO NOT WRITE credentials in git!!!
const HOST_URI =
  "mongodb+srv://admin:c7ryJ6rauNBQcMlb@cluster0.azpy3gy.mongodb.net/movieReader?retryWrites=true&w=majority";

async function main() {
  try {
    await mongoose.connect(HOST_URI);
    console.log("Connected to mongodb!");
  } catch (error) {
    console.error("Error while connecting to mongodb", error.message);
    process.exit(1);
  }
}

main();
