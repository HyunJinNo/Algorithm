const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const MOD = 1_000_000_007n;
const A = BigInt(input[0]);
const B = BigInt(input[1]);

const expdiv = (a, b) => {
  if (b === 0n) {
    return 1n;
  } else if (b === 1n) {
    return a;
  } else {
    const value = expdiv(a, b / 2n);

    if (b % 2n === 0n) {
      return (value * value) % MOD;
    } else {
      return (value * value * a) % MOD;
    }
  }
};

console.log(expdiv(A, B).toString());