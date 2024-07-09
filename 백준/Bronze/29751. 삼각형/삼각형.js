const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split(" ");

const [W, H] = input.map(Number);
console.log(((W * H) / 2).toFixed(1));
