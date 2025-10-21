const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const t = Number(input[0]); // 테스트 케이스의 개수, 0 < t < 100
let answer = "";

const extendedGCD = (a, b) => {
  if (b === 0) {
    return { gcd: a, x: 1, y: 0 };
  } else {
    const { gcd, x: x1, y: y1 } = extendedGCD(b, a % b);

    const x = y1;
    const y = x1 - Math.floor(a / b) * y1;

    return { gcd, x, y };
  }
};

const modInverse = (a, m) => {
  const { gcd, x } = extendedGCD(a, m);

  if (gcd !== 1) {
    return "IMPOSSIBLE\n";
  }

  let result = ((x % m) + m) % m;

  while (a * result <= m) {
    result += m;
  }

  return `${result > 1_000_000_000 ? "IMPOSSIBLE" : result}\n`;
};

for (let i = 1; i <= t; i++) {
  // K: 참가자 수
  // C: 한 봉지에 들어있는 사탕의 개수
  // 1 <= K, C <= 1_000_000_000
  const [K, C] = input[i].split(" ").map(Number);

  // (C * x) mod K = 1
  answer += modInverse(C, K);
}

console.log(answer.trim());