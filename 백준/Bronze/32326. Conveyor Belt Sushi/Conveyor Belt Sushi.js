const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const [R, G, B] = input.map(Number);
console.log(R * 3 + G * 4 + B * 5);
