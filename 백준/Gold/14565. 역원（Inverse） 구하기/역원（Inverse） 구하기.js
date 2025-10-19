const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();

// 2 <= N <= 10^12
// 1 <= A < N
const [N, A] = input.split(" ").map(Number);

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

  // 모듈러 역원이 존재하지 않는 경우 -1 리턴.
  if (gcd !== 1) {
    return -1;
  }

  // 음수인 경우 양수로 조정.
  return ((x % m) + m) % m;
};

console.log(N - A, extendedGCD(A, N).gcd === 1 ? modInverse(A, N) : -1);