const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const T = Number(input[0]); // 테스트케이스의 수, 1 <= T <= 10_000
for (let i = 1; i <= T; i++) {
	// N: 시즌 한정 음료 쿠폰의 수
	// M: 일반 음료 쿠폰의 수
	const arr = input[i].trim().split(" ");
	const N = BigInt(arr[0]);
	const M = BigInt(arr[1]);
	const a = N / 5n;
	const b = (N + M) / 12n;
	if (a > b) {
		console.log(b.toString());
	} else {
		console.log(a.toString());
	}
}