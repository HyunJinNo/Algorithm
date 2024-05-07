const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const T = Number(input[0]); // 테스트 케이스의 수

for (let i = 1; i <= T; i++) {
  // N: A의 수
  // M: B의 수
  // 1 <= N, M <= 20_000
  const [N, M] = input[1 + 3 * (i - 1)].split(" ").map(Number);
  const A = input[2 + 3 * (i - 1)].split(" ").map(Number);
  const B = input[3 * i].split(" ").map(Number);
  let result = 0;
  let left = 0;
  A.sort((a, b) => a - b);
  B.sort((a, b) => a - b);

  for (let j = 0; j < N; j++) {
    let right = M - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (A[j] > B[mid]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    result += left;
  }

  console.log(result);
}
