const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 테스트 케이스의 수, 1 < N < 100

const gcd = (a, b) => {
  return b === 0 ? a : gcd(b, a % b);
};

for (let i = 1; i <= N; i++) {
  const arr = input[i].split(" ").map(Number); // 1 < arr.length < 100
  const length = arr.length;
  let result = 0;

  for (let j = 0; j < length; j++) {
    for (let k = j + 1; k < length; k++) {
      result = Math.max(
        result,
        gcd(Math.max(arr[j], arr[k]), Math.min(arr[j], arr[k])),
      );
    }
  }

  console.log(result);
}
