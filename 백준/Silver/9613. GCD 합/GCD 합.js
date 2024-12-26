const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const t = Number(input[0]); // 테스트 케이스의 수, 1 <= t <= 100

/**
 *
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

for (let i = 1; i <= t; i++) {
  const temp = input[i].split(" ").map(Number);
  const [n, arr] = [temp[0], temp.slice(1)];
  let result = 0;

  for (let j = 0; j < n; j++) {
    for (let k = j + 1; k < n; k++) {
      result += gcd(arr[j], arr[k]);
    }
  }

  console.log(result);
}
