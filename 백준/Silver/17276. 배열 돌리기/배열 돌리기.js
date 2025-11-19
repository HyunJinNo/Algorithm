const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const T = Number(input[0]); // 테스트 케이스의 개수, 1 <= T <= 10
let index = 1;
let answer = "";

const rotateClockwise45 = (arr) => {
  const length = arr.length;
  const result = Array.from({ length }, () => Array(length));

  for (let row = 0; row < length; row++) {
    for (let col = 0; col < length; col++) {
      if (row === col) {
        result[row][(length - 1) / 2] = arr[row][col];
      } else if (row + col === length - 1) {
        result[(length - 1) / 2][col] = arr[row][col];
      } else if (row === (length - 1) / 2) {
        result[col][col] = arr[row][col];
      } else if (col === (length - 1) / 2) {
        result[row][length - 1 - row] = arr[row][col];
      } else {
        result[row][col] = arr[row][col];
      }
    }
  }

  return result;
};

const getResult = (arr, d) => {
  let result = arr;

  if (d === -315 || d === 45) {
    result = rotateClockwise45(result);
  } else if (d === -270 || d === 90) {
    for (let iter = 0; iter < 2; iter++) {
      result = rotateClockwise45(result);
    }
  } else if (d === -225 || d === 135) {
    for (let iter = 0; iter < 3; iter++) {
      result = rotateClockwise45(result);
    }
  } else if (d === -180 || d === 180) {
    for (let iter = 0; iter < 4; iter++) {
      result = rotateClockwise45(result);
    }
  } else if (d === -135 || d === 225) {
    for (let iter = 0; iter < 5; iter++) {
      result = rotateClockwise45(result);
    }
  } else if (d === -90 || d === 270) {
    for (let iter = 0; iter < 6; iter++) {
      result = rotateClockwise45(result);
    }
  } else if (d === -45 || d === 315) {
    for (let iter = 0; iter < 7; iter++) {
      result = rotateClockwise45(result);
    }
  }

  return result;
};

for (let iter = 0; iter < T; iter++) {
  // n: 배열의 크기, 1 <= n < 500, n % 2 === 1
  // d: 각도, d % 45 === 0
  const [n, d] = input[index++].split(" ").map(Number);
  const arr = [];

  for (let iter2 = 0; iter2 < n; iter2++) {
    arr.push(input[index++].split(" ").map(Number));
  }

  const result = getResult(arr, d);

  for (let i = 0; i < n; i++) {
    answer += `${result[i].toString().replaceAll(",", " ")}\n`;
  }
}

console.log(answer.trim());