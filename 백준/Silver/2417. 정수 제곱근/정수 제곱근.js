const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const n = BigInt(require("fs").readFileSync(path).toString());
let left = -1;
let right = Math.pow(2, 32);

while (left + 1 < right) {
  const mid = Math.floor((left + right) / 2);
  if (BigInt(mid) * BigInt(mid) >= n) {
    right = mid;
  } else {
    left = mid;
  }
}

console.log(right);
