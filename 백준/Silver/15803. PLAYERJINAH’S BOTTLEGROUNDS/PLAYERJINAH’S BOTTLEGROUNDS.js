const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const arr = [];
for (let i = 0; i < 3; i++) {
  arr.push(input[i].trim().split(" ").map(Number));
}
arr.sort((a, b) => {
  return a[0] - b[0];
});

let temp1 = (arr[1][1] - arr[0][1]) / (arr[1][0] - arr[0][0]);
let temp2 = (arr[2][1] - arr[1][1]) / (arr[2][0] - arr[1][0]);

if (arr[1][0] === arr[0][0]) {
  temp1 = Infinity;
}
if (arr[2][0] === arr[1][0]) {
  temp2 = Infinity;
}

if (temp1 === temp2) {
  console.log("WHERE IS MY CHICKEN?");
} else {
  console.log("WINNER WINNER CHICKEN DINNER!");
}
