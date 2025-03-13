const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
let index = 0;

while (true) {
  const [M, F] = input[index++].split(" ").map(Number);

  if (M === 0 && F === 0) {
    break;
  }

  console.log(M + F);
}
