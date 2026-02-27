const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 3 <= N <= 6
const arr = [];
let answer = false;

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" "));
}

const check = () => {
  let result = true;

  loop: for (let row = 0; row < N; row++) {
    for (let col = 0; col < N; col++) {
      if (arr[row][col] === "T") {
        // 상
        loop2: for (let i = row - 1; i >= 0; i--) {
          if (arr[i][col] === "O") {
            break loop2;
          } else if (arr[i][col] === "S") {
            result = false;
            break loop;
          }
        }

        // 하
        loop3: for (let i = row + 1; i < N; i++) {
          if (arr[i][col] === "O") {
            break loop3;
          } else if (arr[i][col] === "S") {
            result = false;
            break loop;
          }
        }

        // 좌
        loop4: for (let i = col - 1; i >= 0; i--) {
          if (arr[row][i] === "O") {
            break loop4;
          } else if (arr[row][i] === "S") {
            result = false;
            break;
          }
        }

        // 우
        loop5: for (let i = col + 1; i < N; i++) {
          if (arr[row][i] === "O") {
            break loop5;
          } else if (arr[row][i] === "S") {
            result = false;
            break;
          }
        }
      }
    }
  }

  return result;
};

/**
 * @param {number} row
 * @param {number} col
 * @param {number} count
 */
const solution = (row, col, count) => {
  if (count === 3) {
    if (check()) {
      answer = true;
    }
    return;
  } else if (row >= N || col >= N) {
    return;
  } else if (answer) {
    return;
  }

  // 장애물을 설치하는 경우
  if (arr[row][col] === "X") {
    arr[row][col] = "O";

    if (col === N - 1) {
      solution(row + 1, 0, count + 1);
    } else {
      solution(row, col + 1, count + 1);
    }

    arr[row][col] = "X";
  }

  // 장애물을 설치하지 않는 경우
  if (col === N - 1) {
    solution(row + 1, 0, count);
  } else {
    solution(row, col + 1, count);
  }
};

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (arr[row][col] === "X") {
      arr[row][col] = "O";

      if (col === N - 1) {
        solution(row + 1, 0, 1);
      } else {
        solution(row, col + 1, 1);
      }

      arr[row][col] = "X";
    }
  }
}

console.log(answer ? "YES" : "NO");