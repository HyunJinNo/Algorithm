const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 세로 격자의 수, 5 <= N <= 100
// M: 가로 격자의 수, 5 <= M <= 100
const [N, M] = input[0].split(" ").map(Number);
const arr = [];
let answer = 0;

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

arr[0][0] = -1; // -1: 외부 공기

const findExternalArea = () => {
  const visited = Array.from({ length: N }, () => Array(M).fill(false));
  visited[0][0] = true;

  const check = (row, col) => {
    if (row - 1 >= 0 && !visited[row - 1][col] && arr[row - 1][col] <= 0) {
      visited[row - 1][col] = true;
      arr[row - 1][col] = -1;
      check(row - 1, col);
    }

    if (row + 1 < N && !visited[row + 1][col] && arr[row + 1][col] <= 0) {
      visited[row + 1][col] = true;
      arr[row + 1][col] = -1;
      check(row + 1, col);
    }

    if (col - 1 >= 0 && !visited[row][col - 1] && arr[row][col - 1] <= 0) {
      visited[row][col - 1] = true;
      arr[row][col - 1] = -1;
      check(row, col - 1);
    }

    if (col + 1 < M && !visited[row][col + 1] && arr[row][col + 1] <= 0) {
      visited[row][col + 1] = true;
      arr[row][col + 1] = -1;
      check(row, col + 1);
    }
  };

  check(0, 0);
};

const meltCheese = () => {
  let flag = false;

  for (let row = 1; row < N - 1; row++) {
    for (let col = 1; col < M - 1; col++) {
      if (arr[row][col] === 1) {
        let externalAirCount = 0;

        if (arr[row - 1][col] === -1) {
          externalAirCount++;
        }

        if (arr[row + 1][col] === -1) {
          externalAirCount++;
        }

        if (arr[row][col - 1] === -1) {
          externalAirCount++;
        }

        if (arr[row][col + 1] === -1) {
          externalAirCount++;
        }

        if (externalAirCount >= 2) {
          arr[row][col] = 0;
          flag = true;
        }
      }
    }
  }

  return flag;
};

while (true) {
  findExternalArea();
  const flag = meltCheese();

  if (!flag) {
    break;
  } else {
    answer++;
  }
}

console.log(answer);