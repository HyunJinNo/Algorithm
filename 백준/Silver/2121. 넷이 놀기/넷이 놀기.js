const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

let answer = 0;
const N = Number(input[0]); // 점들의 개수, 5 <= N <= 500_000

// A: 직사각형의 가로 길이, 1 <= A <= 1_000
// B: 직사각형의 세로 길이, 1 <= B <= 1_000
const [A, B] = input[1].split(" ").map(Number);
const pointSet = new Set();

for (let i = 2; i < 2 + N; i++) {
  pointSet.add(input[i].trim());
}

pointSet.forEach((point) => {
  const [a, b] = point.split(" ").map(Number);
  if (
    pointSet.has(`${a + A} ${b}`) &&
    pointSet.has(`${a} ${b + B}`) &&
    pointSet.has(`${a + A} ${b + B}`)
  ) {
    answer++;
  }
});
console.log(answer);
