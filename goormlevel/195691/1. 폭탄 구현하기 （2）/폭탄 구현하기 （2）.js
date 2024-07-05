const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// N: 땅의 한 변의 길이, 1 <= N <= 200
// K: 폭탄을 떨어트릴 횟수, 1 <= K <= 500_000
const [N, K] = input[0].trim().split(" ").map(Number);
const arr = Array.from(Array(N), () => Array(N).fill(0));
const ground = []; // 땅의 초기 상태

for (let i = 1; i <= N; i++) {
	ground.push(input[i].trim().split(" "));
}

const increase = (row, col) => {
	if (row < 0 || row >= N || col < 0 || col >= N) {
		return;
	}
	
	switch (ground[row][col]) {
		case "#":
			break;
		case "0":
			arr[row][col]++;
			break;
		case "@":
			arr[row][col] += 2;
			break;
		default:
			break;
	}
}

for (let i = N + 1; i <= N + K; i++) {
	const [row, col] = input[i].trim().split(" ").map((value) => Number(value) - 1);
	increase(row, col);
	increase(row - 1, col);
	increase(row + 1, col);
	increase(row, col - 1);
	increase(row, col + 1);
}

let answer = 0;
for (let i = 0; i < N; i++) {
	for (let j = 0; j < N; j++) {
		answer = Math.max(answer, arr[i][j]);
	}
}
console.log(answer);