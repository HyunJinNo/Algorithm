const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// M: 한 변의 길이, 1 <= M <= 1_000
// n: 명령어의 수, 1 <= n <= 1_000
const [M, n] = input[0].trim().split(" ").map(Number);
let direction = 1; // 0: North, 1: East, 2: South, 3: West
let x = 0;
let y = 0;
let flag = true; // 명령어의 유효성 여부

loop: for (let i = 1; i <= n; i++) {
  const [command, numStr] = input[i].trim().split(" ");
  const num = Number(numStr);

  if (command === "MOVE") {
    switch (direction) {
      case 0:
        if (y + num <= M) {
          y += num;
          break;
        } else {
          flag = false;
          break loop;
        }
      case 1:
        if (x + num <= M) {
          x += num;
          break;
        } else {
          flag = false;
          break loop;
        }
      case 2:
        if (y - num >= 0) {
          y -= num;
          break;
        } else {
          flag = false;
          break loop;
        }
      case 3:
        if (x - num >= 0) {
          x -= num;
          break;
        } else {
          flag = false;
          break loop;
        }
      default:
        break;
    }
  } else {
    if (num === 0) {
      direction = (direction + 3) % 4;
    } else {
      direction = (direction + 1) % 4;
    }
  }
}

if (flag) {
  console.log(x, y);
} else {
  console.log(-1);
}
