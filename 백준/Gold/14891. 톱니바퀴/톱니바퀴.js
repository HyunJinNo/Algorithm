const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const arr = [];
const gearIndex = [];
for (let i = 0; i < 4; i++) {
  arr.push(input[i].trim());
  gearIndex.push({ left: 6, right: 2 });
}

const rotate = (index, direction, plus) => {
  if (index < 0 || index >= 4) {
    return;
  }

  if (
    plus === -1 &&
    arr[index][gearIndex[index].right] !==
      arr[index + 1][(gearIndex[index + 1].left + direction + 8) % 8]
  ) {
    gearIndex[index].left = (gearIndex[index].left + direction + 8) % 8;
    gearIndex[index].right = (gearIndex[index].right + direction + 8) % 8;
    rotate(index - 1, -direction, plus);
  } else if (
    plus === 1 &&
    arr[index][gearIndex[index].left] !==
      arr[index - 1][(gearIndex[index - 1].right + direction + 8) % 8]
  ) {
    gearIndex[index].left = (gearIndex[index].left + direction + 8) % 8;
    gearIndex[index].right = (gearIndex[index].right + direction + 8) % 8;
    rotate(index + 1, -direction, plus);
  }
};

const K = Number(input[4]); // 회전 횟수, 1 <= K <= 100
for (let i = 0; i < K; i++) {
  const [num, direction] = input[i + 5].trim().split(" ").map(Number);
  const index = num - 1;

  if (direction === -1) {
    gearIndex[index].left = (gearIndex[index].left + 1) % 8;
    gearIndex[index].right = (gearIndex[index].right + 1) % 8;
  } else {
    gearIndex[index].left = (gearIndex[index].left + 7) % 8;
    gearIndex[index].right = (gearIndex[index].right + 7) % 8;
  }

  rotate(index - 1, direction, -1);
  rotate(index + 1, direction, 1);
}

let answer = 0;
for (let i = 0; i < 4; i++) {
  if (arr[i][(gearIndex[i].left + 2) % 8] === "1") {
    answer += Math.pow(2, i);
  }
}

console.log(answer);
