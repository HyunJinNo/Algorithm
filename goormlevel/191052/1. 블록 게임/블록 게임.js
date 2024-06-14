const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]); // 블록을 올려놓은 횟수, 1 <= N <= 1_000
const D = input[1].trim();
const S = input[2].trim().split(" ").map(Number); // 1 <= S[i] <= 1_000
const stack = [[1000, 1000, 1]];
const visited = Array.from(Array(2001), () => Array(2001).fill(false));
let row = 1000;
let col = 1000;
let answer = 0;
visited[1000][1000] = true;

for (let i = 0; i < N; i++) {
	switch (D[i]) {
		case "L":
			col--;
			break;
		case "R":
			col++;
			break;
		case "U":
			row--;
			break;
		case "D":
			row++;
			break;
		default:
			break;
	}
	
	while (visited[row][col]) {
		const temp = stack.pop();
		visited[temp[0]][temp[1]] = false;
	}
	
	
	
	visited[row][col] = true;
	stack.push([row, col, S[i]]);
}

for (let arr of stack) {
	answer += arr[2];
}
console.log(answer);