require("dotenv").config();

const sendGrid = require("@sendgrid/mail");

const { SEND_GRID_KEY } = process.env;

async function main() {
  try {
    sendGrid.setApiKey(SEND_GRID_KEY);

    const email = {
      // from: "bob@gmail.com", // not verified email
      from: "vasergen@gmail.com",
      to: "vasergen@gmail.com",
      subject: "Sendgrid Test 1",
      html: "<h1> Hello there! </h1>", //
      text: "Hello there!",
    };

    const response = await sendGrid.send(email);
    console.log(response);
  } catch (error) {
    console.error("App error:", error);
  }
}
main();
