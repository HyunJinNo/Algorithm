const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

input.forEach((str) => {
  const [N, S] = str.split(" ").map(Number);

  if (!Number.isSafeInteger(N) || !Number.isSafeInteger(S)) {
    return;
  }

  console.log(Math.floor(S / (N + 1)));
});