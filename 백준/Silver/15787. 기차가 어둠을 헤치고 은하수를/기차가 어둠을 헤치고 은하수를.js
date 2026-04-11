const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().trim().split("\n");

// N: 기차의 수, 1 <= N <= 100_000
// M: 명령의 수, 1 <= M <= 100_000
const [N, M] = input[0].split(" ").map(Number);
const trains = new Int32Array(N + 1).fill(0);

for (let index = 1; index <= M; index++) {
  const arr = input[index].split(" ").map(Number);
  const num = arr[0];
  const i = arr[1];
  const x = arr[2];

  switch (num) {
    case 1:
      trains[i] |= 1 << x;
      break;
    case 2:
      trains[i] &= ~(1 << x);
      break;
    case 3:
      trains[i] <<= 1;
      trains[i] &= (1 << 21) - 1;
      break;
    case 4:
      trains[i] >>= 1;
      trains[i] &= ~1;
      break;
    default:
      break;
  }
}

console.log(new Set([...trains.slice(1)]).size);