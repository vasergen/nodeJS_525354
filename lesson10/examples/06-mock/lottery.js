const { generateNumber } = require("./generateNumber");

function lottery(expected) {
  const got = generateNumber();
  if (expected !== got) {
    return "You lost";
  }

  return "You won";
}

module.exports = {
  lottery,
};
