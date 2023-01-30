const nodemailer = require("nodemailer");

const { EMAIL_USER, EMAIL_PASS } = process.env;

function tryCatchWrapper(enpointFn) {
  return async (req, res, next) => {
    try {
      await enpointFn(req, res, next);
    } catch (error) {
      return next(error);
    }
  };
}

function HttpError(status, message) {
  const err = new Error(message);
  err.status = status;
  return err;
}

async function sendMail({ to, html, subject }) {
  const email = {
    from: "info@mymovies.com",
    to,
    subject,
    html,
  };

  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASS,
    },
  });

  await transport.sendMail(email);
}

module.exports = {
  sendMail,
  tryCatchWrapper,
  HttpError,
};
