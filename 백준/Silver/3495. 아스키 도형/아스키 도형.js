const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// 2 <= h, w <= 100
// h: 그림의 높이
// w: 그림의 너비
const [h, w] = input[0].trim().split(" ").map(Number);
let answer = 0;

for (let i = 1; i <= h; i++) {
  const str = input[i].trim();
  let isInside = false;

  for (let c of str) {
    if (c === "/" || c === "\\") {
      answer++;
      isInside = !isInside;
    } else if (isInside) {
      answer += 2;
    }
  }
}
console.log(answer / 2);
