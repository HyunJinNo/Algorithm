const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]); // 공원의 크기, 1 <= N <= 40
const S = [];
for (let i = 1; i <= N; i++) {
	S.push(new Int8Array(input[i].trim().split(" ").map(Number)));
}
let answer = 0;

const check = () => {
	for (let row = 0; row < N; row++) {
		for (let col = 0; col < N; col++) {
			if (S[row][col] !== 0) {
				return false;
			}
		}
	}
	
	return true;
}

while (!check()) {
	answer++;
	const arr = Array.from(Array(N), () => Array(N).fill(0));
	
	for (let row = 0; row < N; row++) {
		for (let col = 0; col < N; col++) {
			if (S[row][col] === 0) {
				if (row - 1 >= 0) {
					arr[row - 1][col]++;
				}
				if (row + 1 < N) {
					arr[row + 1][col]++;
				}
				if (col - 1 >= 0) {
					arr[row][col - 1]++;
				}
				if (col + 1 < N) {
					arr[row][col + 1]++;
				}
			}
		}
	}
	
	for (let row = 0; row < N; row++) {
		for (let col = 0; col < N; col++) {
			S[row][col] = Math.max(S[row][col] - arr[row][col], 0);
		}
	}
}

console.log(answer);