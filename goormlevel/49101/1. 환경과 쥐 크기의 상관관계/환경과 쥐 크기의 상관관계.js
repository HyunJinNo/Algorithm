const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = Number(input[0]); // N마리, 1 <= N <= 100_000
const arr1 = new Int32Array(input[1].trim().split(" ").map(Number));
const arr2 = new Int32Array(input[2].trim().split(" ").map(Number));
const A = new Map();
const B = new Map();

for (let i = 0; i < N; i++) {
	A.set(arr1[i], (A.get(arr1[i]) ?? 0) + 1);
	B.set(arr2[i], (B.get(arr2[i]) ?? 0) + 1);
}

const findNum = (myMap) => {
	let count = 0;
	let result = 100000;
	
	for (let num = 100000; num >= 0; num--) {
		let temp = 0;
		for (let i = 0; i < 5; i++) {
			if (myMap.has(num + 2 - i)) {
				temp += myMap.get(num + 2 - i);
			}
		}
		
		if (temp >= count) {
			count = temp;
			result = num;
		}
	}
	
	return result;
}

const num1 = findNum(A);
const num2 = findNum(B);

console.log(num1, num2);
if (num1 > num2) {
	console.log("good");
} else {
	console.log("bad");
}