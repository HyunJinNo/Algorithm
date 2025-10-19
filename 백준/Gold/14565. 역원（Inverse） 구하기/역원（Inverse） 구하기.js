const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();

// 2 <= N <= 10^12
// 1 <= A < N
const [N, A] = input.split(" ").map(Number);

const gcd = (a, b) => {
  if (b === 0) {
    return a;
  } else {
    return gcd(b, a % b);
  }
};

const modInverse = (a, m) => {
  if (m === 1) {
    return 0;
  }

  const m0 = m;
  let x0 = 0;
  let x1 = 1;

  while (a > 1) {
    const q = Math.floor(a / m);
    [a, m] = [m, a % m];
    [x0, x1] = [x1 - q * x0, x0];
  }

  if (x1 < 0) {
    x1 += m0;
  }
  return x1;
};

console.log(N - A, gcd(A, N) === 1 ? modInverse(A, N) : -1);