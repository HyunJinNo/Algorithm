const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]); // 지인의 수, 2 <= N <= 100_000, (n % 2) === 0
const S = input[1].trim().split(" ").map(Number);
let answer = 0;
for (let score of S) {
	answer += score;
}
console.log(answer);