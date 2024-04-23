const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");

// W: width, 1 <= W <= 100
// H: height, 1 <= H <= 100
// -100 <= X <= 100
// -100 <= Y <= 100
// P: 선수의 수, 1 <= P <= 50
const [W, H, X, Y, P] = input[0].split(" ").map(Number);
const R = H / 2; // 반지름

const check = (x: number, y: number): boolean => {
  // 직사각형 내부에 있는지 확인
  if (x >= X && x <= X + W && y >= Y && y <= Y + H) {
    return true;
  }

  // 두 원 내부에 있는지 확인
  if (Math.pow(x - X, 2) + Math.pow(y - (Y + R), 2) <= R * R) {
    return true;
  }
  if (Math.pow(x - (X + W), 2) + Math.pow(y - (Y + R), 2) <= R * R) {
    return true;
  }

  return false;
};

let answer = 0;
for (let i = 1; i <= P; i++) {
  const [x, y] = input[i].split(" ").map(Number);
  if (check(x, y)) {
    answer++;
  }
}
console.log(answer);
