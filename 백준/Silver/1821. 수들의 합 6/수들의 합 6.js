const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

// 1 <= N <= 10
// 1 <= F <= 1_000_000
const [N, F] = input.split(" ").map(Number);
const used = Array(N + 1).fill(false);
const arr = Array.from({ length: N }, () => Array(N).fill(0));
let answer = "";

const check = () => {
  for (let row = 1; row < N; row++) {
    for (let col = 0; col < N - row; col++) {
      arr[row][col] = arr[row - 1][col] + arr[row - 1][col + 1];
    }
  }

  if (arr[N - 1][0] === F) {
    answer = arr[0].toString().replaceAll(",", " ");
  }
};

const solve = (index) => {
  if (index === N) {
    check();
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (answer !== "") {
      return;
    }

    if (!used[i]) {
      used[i] = true;
      arr[0][index] = i;
      solve(index + 1);
      used[i] = false;
    }
  }
};

solve(0);
console.log(answer);
