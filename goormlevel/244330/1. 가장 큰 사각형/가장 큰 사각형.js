const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const T = Number(input[0]);
let answer = 0;

for (let i = 1; i <= T; i++) {
	const [w, h] = input[i].trim().split(" ").map(Number);
	answer = Math.max(answer, w * h);
}

console.log(answer);