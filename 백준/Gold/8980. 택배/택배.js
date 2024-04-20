"use strict";
var _a;
const path = process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");

// N: 마을의 수, 2 <= N <= 2_000
// C: 트럭의 용량, 1 <= C <= 10_000
const [N, C] = input[0].split(" ").map(Number);
const M = Number(input[1]); // 보내는 박스 정보의 개수, 1 <= M <= 10_000
const arr = [];
for (let i = 2; i <= M + 1; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr.sort((a, b) => {
  if (a[0] > b[0]) {
    return 1;
  }
  else if (a[0] < b[0]) {
    return -1;
  }
  else {
    return a[1] - b[1];
  }
});

let answer = 0;
let index = 0;
let capacity = 0;
const truck = new Map();

for (let town = 1; town <= N; town++) {
  if (truck.has(town)) {
    const temp = truck.get(town);
    capacity -= temp;
    answer += temp;
  }
    
  while (index < M && town === arr[index][0]) {
    capacity += arr[index][2];
    truck.set(arr[index][1], ((_a = truck.get(arr[index][1])) !== null && _a !== void 0 ? _a : 0) + arr[index][2]);
    index++;
  }
    
  const iterator = truck.keys();
  const keys = [];
  for (const key of iterator) {
    keys.push(key);
  }
  keys.sort((a, b) => a - b);
  while (capacity > C) {
    const key = keys.pop();
    if (capacity - truck.get(key) >= C) {
      capacity -= truck.get(key);
      truck.delete(key);
    }
    else {
      truck.set(key, C - (capacity - truck.get(key)));
      capacity = C;
    }
  }
}

console.log(answer);
