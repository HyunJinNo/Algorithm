const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 링의 개수, 3 <= N <= 100
const arr = input[1].split(" ").map(Number); // arr[i]: 링의 반지름, 1 <= arr[i] <= 1_000
let answer = "";

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

for (let i = 1; i < N; i++) {
  const num = gcd(Math.max(arr[0], arr[i]), Math.min(arr[0], arr[i]));
  answer += `${arr[0] / num}/${arr[i] / num}\n`;
}

console.log(answer.trim());