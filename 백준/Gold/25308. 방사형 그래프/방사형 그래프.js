const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();

const findPos = (index, len) => {
  switch (index) {
    case 0:
      return [0, len];
    case 1:
      return [len / Math.SQRT2, len / Math.SQRT2];
    case 2:
      return [len, 0];
    case 3:
      return [len / Math.SQRT2, -len / Math.SQRT2];
    case 4:
      return [0, -len];
    case 5:
      return [-len / Math.SQRT2, -len / Math.SQRT2];
    case 6:
      return [-len, 0];
    case 7:
      return [-len / Math.SQRT2, len / Math.SQRT2];
    default:
      return NaN;
  }
};

const check = () => {
  for (let i = 0; i < 8; i++) {
    let vector1 = [];
    let vector2 = [];

    if (i === 0) {
      vector1 = [arr[7][0] - arr[0][0], arr[7][1] - arr[0][1]];
      vector2 = [arr[1][0] - arr[0][0], arr[1][1] - arr[0][1]];
    } else if (i === 7) {
      vector1 = [arr[6][0] - arr[7][0], arr[6][1] - arr[7][1]];
      vector2 = [arr[0][0] - arr[7][0], arr[0][1] - arr[7][1]];
    } else {
      vector1 = [arr[i - 1][0] - arr[i][0], arr[i - 1][1] - arr[i][1]];
      vector2 = [arr[i + 1][0] - arr[i][0], arr[i + 1][1] - arr[i][1]];
    }

    // 벡터의 외적
    if (vector1[0] * vector2[1] - vector1[1] * vector2[0] < 0) {
      return false;
    }
  }
  return true;
};

const solve = (index) => {
  if (index >= 8) {
    if (check()) {
      answer++;
    }
    return;
  }

  for (let i = 0; i < 8; i++) {
    if (!visited[i]) {
      arr[index] = findPos(index, a[i]);
      visited[i] = true;
      solve(index + 1);
      visited[i] = false;
    }
  }
};

const a = new Int16Array(input.split(" ").map(Number)); // 1 <= a[i] <= 10_000
const visited = Array(8).fill(false);
const arr = Array(8).fill([0, 0]);
let answer = 0;
solve(0);

console.log(answer);
