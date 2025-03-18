const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const M = Number(input[0]); // 컵의 위치를 바꾼 횟수, 1 <= M <= 50
const arr = [false, true, false, false];

for (let i = 1; i < 1 + M; i++) {
  const [X, Y] = input[i].split(" ").map(Number);

  const temp = arr[X];
  arr[X] = arr[Y];
  arr[Y] = temp;
}

console.log(arr.indexOf(true));
