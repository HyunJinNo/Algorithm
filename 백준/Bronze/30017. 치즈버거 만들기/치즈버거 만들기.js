const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();

// A: 패티의 개수, 2 <= A <= 100
// B: 치즈의 개수, 1 <= B <= 100
const [A, B] = input.split(" ").map(Number);

console.log(A <= B + 1 ? A * 2 - 1 : B * 2 + 1);