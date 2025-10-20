const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString();

// 0 <= Ax, Ay, Bx, By, Cx, Cy, Dx, Dy <= 10_000
const [Ax, Ay, Bx, By, Cx, Cy, Dx, Dy] = input.split(" ").map(Number);

const getDistance = (t) => {
  const x1 = Ax * (1 - t) + Bx * t;
  const y1 = Ay * (1 - t) + By * t;
  const x2 = Cx * (1 - t) + Dx * t;
  const y2 = Cy * (1 - t) + Dy * t;

  return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
};

let left = 0;
let right = 1;

for (let iter = 0; iter < 100; iter++) {
  const a = (2 * left + right) / 3;
  const b = (left + 2 * right) / 3;

  if (getDistance(a) > getDistance(b)) {
    left = a;
  } else {
    right = b;
  }
}

console.log(getDistance(left));