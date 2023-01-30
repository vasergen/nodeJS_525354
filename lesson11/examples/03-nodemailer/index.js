require("dotenv").config();

const nodemailer = require("nodemailer");

const { EMAIL_PASS, EMAIL_USER } = process.env;

async function main() {
  try {
    const email = {
      from: "vasergen@gmail.com",
      to: "vasergen@gmail.com",
      subject: "Sendgrid Test 2",
      html: "<h1> Hello there! </h1>", //
      text: "Hello there text!",
    };

    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS,
      },
    });

    const response = await transport.sendMail(email);
    console.log(response);
  } catch (error) {
    console.error("app error:", error);
  }
}
main();
