const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const C = Number(input[0]); // 테스트 케이스의 개수

for (let i = 1; i <= C; i++) {
  // N: 학생의 수, 1 <= N <= 1_000
  const [N, ...arr] = input[i].trim().split(" ").map(Number);
  const average = arr.reduce((total, current) => total + current, 0) / N;
  const count = arr.reduce((total, current) => {
    if (current > average) {
      return total + 1;
    } else {
      return total;
    }
  }, 0);

  console.log(`${((count * 100) / N).toFixed(3)}%`);
}
