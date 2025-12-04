const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const N = Number(input[0]); // 수열의 크기, 2 <= N <= 100
const B = input[1].split(" ").map(BigInt); // 1 <= B[i] <= Math.pow(10, 18)
const map = new Map();
let maxCount = 0;
let minCount = Infinity;
let answer = "";

for (let i = 0; i < N; i++) {
  let num = B[i];
  let count = 0;

  while (num % 3n === 0n) {
    count++;
    num /= 3n;
  }

  if (!map.has(count)) {
    map.set(count, []);
  }

  map.get(count).push(B[i]);
  maxCount = Math.max(maxCount, count);
  minCount = Math.min(minCount, count);
}

for (let count = maxCount; count >= minCount; count--) {
  const arr = map.get(count);
  arr.sort((a, b) => (a > b ? 1 : -1));

  for (let j = 0; j < arr.length; j++) {
    answer += `${arr[j]} `;
  }
}

console.log(answer.trim());