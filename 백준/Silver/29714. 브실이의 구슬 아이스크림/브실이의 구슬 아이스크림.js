const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 구슬 수, 1 <= N <= 200_000
const arr = input[1].split(" ").map(Number); // 1 <= arr[i] <= 1_000_000_000
const Q = Number(input[2]); // 아이스크림을 먹는 횟수, 1 <= Q <= 200_000
let index = 3;

const map = new Map();

arr.forEach((value) => {
  map.set(value, (map.get(value) ?? 0) + 1);
});

for (let iter = 0; iter < Q; iter++) {
  const a = input[index++].split(" ").map(Number); // 0 <= a[i] <= 200_000
  const b = input[index++].split(" ").map(Number); // 0 <= b[i] <= 200_000
  let i = 1;
  let flag = true;

  while (i <= a[0]) {
    if (!map.has(a[i]) || map.get(a[i]) === 0) {
      i--;
      flag = false;
      break;
    }

    map.set(a[i], map.get(a[i++]) - 1);
  }

  if (flag) {
    for (let i = 1; i <= b[0]; i++) {
      map.set(b[i], (map.get(b[i]) ?? 0) + 1);
    }
  } else {
    while (i >= 1) {
      map.set(a[i], map.get(a[i]) + 1);
      i--;
    }
  }
}

let count = 0;
let answer = "";

map.forEach((value, key) => {
  if (value !== 0) {
    for (let iter = 0; iter < value; iter++) {
      count++;
      answer += `${key} `;
    }
  }
});

if (count === 0) {
  console.log(0);
} else {
  console.log(count);
  console.log(answer.trim());
}
