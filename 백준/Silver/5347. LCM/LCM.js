const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const n = Number(input[0]); // 테스트 케이스의 개수

/**
 * @param {number} a
 * @param {number} b
 */
const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

for (let i = 1; i <= n; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  console.log((a * b) / gcd(Math.max(a, b), Math.min(a, b)));
}
