const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]); // 총 라운드의 수, 1 <= N <= 1_000
let index = 1;
let answer = "";

/**
 * 딱지 데이터를 얻는 함수
 **/
const getData = () => {
	const data = {
		4: 0,
		3: 0,
		2: 0,
		1: 0
	};
	
	const arr = input[index++].trim().split(" ").map(Number);
	const a = arr[0];
	
	for (let i = 1; i <= a; i++) {
		data[arr[i]]++;
	}
	
	return data;
}

for (let iter = 0; iter < N; iter++) {
	const A = getData();
	const B = getData();
	let result = "D";
	
 	for (let num = 4; num >= 1; num--) {
		if (A[num] > B[num]) {
			result = "A";
			break;
		} else if (A[num] < B[num]) {
			result = "B";
			break;
		}
	}
	
	answer += `${result}\n`;
}

console.log(answer);
