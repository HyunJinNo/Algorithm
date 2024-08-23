const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

switch (input.trim()) {
  case "M":
    console.log("MatKor");
    break;
  case "W":
    console.log("WiCys");
    break;
  case "C":
    console.log("CyKor");
    break;
  case "A":
    console.log("AlKor");
    break;
  case "$":
    console.log("$clear");
    break;
  default:
    throw new Error("Undefined Character");
}
