const bcrypt = require("bcrypt");

async function main() {
  const password = "123456";
  const salt = await bcrypt.genSalt(); // salt => string
  // const salt = "$2b$10$1XCZz1Re46bhQlPwkBRu2u";
  hashed = await bcrypt.hash(password, salt);
  // $2b$10$1XCZz1Re46bhQlPwkBRu2uBPe2o.UzsXfRyN9JfpovDKv8AuxziMe

  console.log("hashed", hashed);

  const isTheSame = await bcrypt.compare("123457", hashed);

  // compare
  // -> salt, hashedStr
  // -> bcrypt.alg( salt + "123457") => haedStr

  // console.log("isTheSame:", isTheSame);
}
main();
