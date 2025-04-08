const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// 1 <= H <= 100
// 1 <= W <= 100
const [H, W] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((str) => str.trim().split(""));
const answer = Array.from({ length: H }, () => Array(W).fill(101));

for (let time = 0; time < 100; time++) {
  for (let i = 0; i < H; i++) {
    for (let j = 0; j < W; j++) {
      if (arr[i][j] === "c") {
        answer[i][j] = Math.min(answer[i][j], time);
      }
    }
  }

  for (let i = 0; i < H; i++) {
    for (let j = W - 1; j > 0; j--) {
      arr[i][j] = arr[i][j - 1];
    }
    arr[i][0] = ".";
  }
}

let result = "";
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (answer[i][j] === 101) {
      answer[i][j] = -1;
    }
  }

  result += `${answer[i].toString().replaceAll(",", " ")}\n`;
}

console.log(result.trim());
