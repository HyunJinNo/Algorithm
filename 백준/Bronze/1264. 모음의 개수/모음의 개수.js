const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

loop: for (const str of input) {
  let result = 0;

  for (const c of str) {
    switch (c) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
        result++;
        break;
      case "#":
        break loop;
      default:
        break;
    }
  }

  console.log(result);
}
