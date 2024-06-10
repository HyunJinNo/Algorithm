const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const T = Number(input[0]);

for (let i = 1; i <= T; i++) {
	const [X, Y, N] = input[i].trim().split(" ").map(Number);
	const distance = Math.abs(X) + Math.abs(Y);
	
	if (distance > N) {
		console.log("NO");
	} else if ((N - distance) % 2 === 0) {
		console.log("YES");
	} else {
		console.log("NO");
	}
}