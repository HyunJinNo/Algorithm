const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const T = Number(input[0]); // 톱니바퀴의 개수, 1 <= T <= 1_000
const topIndex = Array(T).fill(0);
const gear = [];

for (let i = 1; i <= T; i++) {
  gear.push(input[i].trim());
}

/**
 * @param {number} index 현재 시키려는 (index + 1)번째 톱니바퀴
 * @param {number} direction 이전 톱니바퀴의 회전 방향
 * @param {number} propagation 전파 방향
 */
const rotate = (index, direction, propagation) => {
  if (index < 0 || index >= T) {
    return;
  }

  if (
    propagation === -1 &&
    gear[index][(topIndex[index] + 2) % 8] !==
      gear[index + 1][(topIndex[index + 1] + 6 + direction) % 8]
  ) {
    topIndex[index] = (topIndex[index] + direction + 8) % 8;
    rotate(index - 1, -direction, propagation);
  } else if (
    propagation === 1 &&
    gear[index][(topIndex[index] + 6) % 8] !==
      gear[index - 1][(topIndex[index - 1] + 2 + direction) % 8]
  ) {
    topIndex[index] = (topIndex[index] + direction + 8) % 8;
    rotate(index + 1, -direction, propagation);
  }
};

const K = Number(input[T + 1]); // 회전 횟수, 1 <= K <= 1_000
for (let i = T + 2; i <= T + K + 1; i++) {
  const [temp, direction] = input[i].trim().split(" ").map(Number);
  const index = temp - 1;

  if (direction === -1) {
    topIndex[index] = (topIndex[index] + 1) % 8;
  } else {
    topIndex[index] = (topIndex[index] + 7) % 8;
  }

  rotate(index - 1, direction, -1);
  rotate(index + 1, direction, 1);
}

let answer = 0;
for (let i = 0; i < T; i++) {
  if (gear[i][topIndex[i]] === "1") {
    answer++;
  }
}
console.log(answer);
