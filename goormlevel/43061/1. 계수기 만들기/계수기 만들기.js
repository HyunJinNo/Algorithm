const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]); // 계수기의 숫자판의 개수, 1 <= N <= 8
const A = new Int8Array(input[1].trim().split(" ").map(Number)); // 각 숫자판의 최댓값, 0 <= A[i] <= 9
const B = new Int8Array(input[2].trim().split(" ").map(Number)); // 각 숫자판의 초기값, 0 <= B[i] <= A[i]
const K = Number(input[3]); // 버튼을 누르는 횟수, 0 <= K <= 100_000

for (let i = 0; i < K; i++) {
	let index = N - 1;
	while (index >= 0) {
		if (B[index] !== A[index]) {
			B[index]++;
			break;
		} else {
			B[index] = 0;
			index--;
		}
	}
}

console.log(B.join(""));