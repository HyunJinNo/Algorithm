const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

/**
 * @param {string} str
 */
const rev = (str) => {
  return str.split("").reverse().join("");
};

const [X, Y] = input.split(" ").map((str) => str.trim());

console.log(Number(rev((Number(rev(X)) + Number(rev(Y))).toString())));
