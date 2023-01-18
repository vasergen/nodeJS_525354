const jwt = require("jsonwebtoken");

const JWT_SECRET = "anysecretwillworkhere!"; // should be in .env file - secret information

async function main() {
  // Ex1- generate token
  const payload = { id: 123 };
  const token = jwt.sign(payload, JWT_SECRET, {
    expiresIn: "15s", // 15 seconds
  });
  // console.log("token", token);

  // Ex2 - check if valid
  // try {
  //   const res = jwt.verify(token, JWT_SECRET);
  //   console.log("res", res);
  // } catch (error) {
  //   console.error("verification error: ", error);
  // }

  // Ex3 - check if valid - expired error
  // try {
  //   const expiredToken =
  //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJpYXQiOjE2NzQwNjUyNjgsImV4cCI6MTY3NDA2NTI4M30.8dIZvgDwxiwzmPy9KODHo6gL9NE1aLW2_kS0_scGl_Y";
  //   const res = jwt.verify(expiredToken, JWT_SECRET);
  //   console.log("res", res);
  // } catch (error) {
  //   console.error("verification error 2: ", error.name, error);
  // }

  // Ex4 - check if valid  - invalid signature
  // try {
  //   const invalidToken = token + "AAA";
  //   const res = jwt.verify(invalidToken, JWT_SECRET);
  //   console.log("res", res);
  // } catch (error) {
  //   console.error("verification error 3: ", error.name, error);
  // }
}
main();
