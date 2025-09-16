const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();

const [N, K] = input.split(" ").map(Number);
let count = 0;
const isPrime = Array(N + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;

loop: for (let i = 2; i <= N; i++) {
  if (isPrime[i]) {
    for (let j = i; j <= N; j += i) {
      if (isPrime[j]) {
        isPrime[j] = false;
        count++;

        if (count === K) {
          console.log(j);
          break loop;
        }
      }
    }
  }
}