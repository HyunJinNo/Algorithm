const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();

if (input[0] === "F") {
  console.log("Foundation");
} else if (input[0] === "C") {
  console.log("Claves");
} else if (input[0] === "V") {
  console.log("Veritas");
} else {
  console.log("Exploration");
}