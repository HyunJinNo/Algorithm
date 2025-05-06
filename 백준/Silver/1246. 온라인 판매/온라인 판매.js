const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// N: 달걀의 개수, 1 <= N <= 1_000
// M: 잠재적인 고객의 수, 1 <= M <= 1_000
const [N, M] = input[0].split(" ").map(Number);
const P = [];

for (let i = 1; i <= M; i++) {
  P.push(Number(input[i]));
}

P.sort((a, b) => b - a);

let answer = 0;
let price = 0;

for (let i = 0; i < Math.min(N, M); i++) {
  if (answer <= (i + 1) * P[i]) {
    answer = Math.max(answer, (i + 1) * P[i]);
    price = P[i];
  }
}

console.log(`${price} ${answer}`);
