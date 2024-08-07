const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
let index = 0;

while (true) {
  const [a, b] = input[index++].trim().split(" ").map(Number);

  if (a === 0 && b === 0) {
    return;
  } else if (a > b) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
