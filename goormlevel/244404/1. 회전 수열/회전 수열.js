const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// N: 수열의 길이, 1 <= N <= 10_000
// M: 회전 횟수, 1 <= M <= 1_000_000
const [N, M] = input[0].trim().split(" ").map(Number);
const A = new Int32Array(input[1].trim().split(" ").map(Number)); // 1 <= A[i] <= 1_000_000
let index = 0;

for (let i = 0; i < M; i++) {
	index = (index + A[index]) % N;
}
console.log(A[index]);
