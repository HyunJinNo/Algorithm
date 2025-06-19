const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// W: 가로 길이, 1 <= W <= 30
// H: 세로 길이, 1 <= H <= 30
const [W, H] = input[0].split(" ").map(Number);
const [x, y] = input[1].split(" ").map(Number);
const [x1, y1, x2, y2] = input[2].split(" ").map(Number);

if (y <= y1) {
  console.log(0.0);
  process.exit(0);
}

const a = (x * y1) / y;
const b = x + ((W - x) * (y - y2)) / y;

if (a < x1) {
  if (b < x1) {
    console.log(0.0);
  } else if (b >= x1 && b <= x2) {
    console.log((b - x1) / (b - a));
  } else {
    console.log((x2 - x1) / (b - a));
  }
} else if (a >= x1 && a <= x2) {
  if (b >= x1 && b <= x2) {
    console.log(1.0);
  } else {
    console.log((x2 - a) / (b - a));
  }
} else {
  console.log(0.0);
}
