const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");
const N = Number(input[0]); // 카드의 개수, 3 <= N <= 48, N % 3 === 0
const str = input[1].split(" ").map(Number).join("");
const S = input[2].split(" ").map(Number); // 0 <= S[i] <= N - 1
const cache = new Set();
let card = Array.from({ length: N }, (_, index) => index);
let count = 0;

while (true) {
  const arr = Array(N);

  for (let i = 0; i < N; i++) {
    arr[card[i]] = i % 3;
  }

  if (arr.join("") === str) {
    break;
  } else if (cache.has(arr.join(""))) {
    count = -1;
    break;
  } else {
    cache.add(arr.join(""));
  }

  const temp = Array(N);

  for (let i = 0; i < N; i++) {
    temp[S[i]] = card[i];
  }

  card = temp;
  count++;
}

console.log(count);