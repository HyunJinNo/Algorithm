const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const [A, B] = input[0].split(" ").map(Number);
const [C, D] = input[1].split(" ").map(Number);

if (A + C < B + D) {
  console.log("Hanyang Univ.");
} else if (A + C > B + D) {
  console.log("Yongdap");
} else {
  console.log("Either");
}