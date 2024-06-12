const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

// N: 집의 개수, 1 <= N <= 1_000
// M: 장마 기간, 1 <= M <= 100_000
const [N, M] = input[0].trim().split(" ").map(Number);
const k = input[1].trim().split(" ").map(Number); // 마을의 땅 높이, -100_000 <= k[i] <= 100_000
let set = new Set();

for (let i = 1; i < M + 1; i++) {
	const [s, e] = input[i + 1].trim().split(" ").map(Number);
	for (let index = s - 1; index <= e - 1; index++) {
		k[index]++;
		set.add(index);
	}
	
	if (i % 3 === 0) {
		for (let index of set) {
			k[index]--;
		}
		
		set = new Set();
	}
}

console.log(k.join(" "));
