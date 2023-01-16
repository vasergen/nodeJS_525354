const base64 = require("base-64");
const md5 = require("md5"); // do not use md5

async function main() {
  // Ex1
  // encoding
  const str = "some text";
  const encodedStr = base64.encode(str);
  // console.log("encodedStr:", encodedStr);
  const decodedStr = base64.decode(encodedStr);
  // console.log("decodedStr:", decodedStr);

  // Ex2
  // hashing
  const str2 = "Asome text some text some text some text some text some text some text some text some text some text";
  const hashedStr = md5(str2);
  console.log("hashedStr:", hashedStr);
}
main();
