const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// 2 <= N <= 50
// 1 <= M <= 13
const [N, M] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((str) => str.split(" ").map(Number));
const chickenStoreList = [];
const homeList = [];

for (let row = 0; row < N; row++) {
  for (let col = 0; col < N; col++) {
    if (arr[row][col] === 2) {
      chickenStoreList.push([row, col]);
    } else if (arr[row][col] === 1) {
      homeList.push([row, col]);
    }
  }
}

const length = chickenStoreList.length; // M <= length <= 13
const selected = Array(M);
let answer = Number.MAX_SAFE_INTEGER;

const findAnswer = (index, startIndex) => {
  if (index === M) {
    let result = 0;

    homeList.forEach(([r1, c1]) => {
      let distance = Number.MAX_SAFE_INTEGER;
      selected.forEach(([r2, c2]) => {
        distance = Math.min(distance, Math.abs(r2 - r1) + Math.abs(c2 - c1));
      });
      result += distance;
    });

    answer = Math.min(answer, result);
    return;
  } else if (startIndex >= length) {
    return;
  }

  for (let i = startIndex; i < length; i++) {
    if (chickenStoreList[i] !== null) {
      selected[index] = chickenStoreList[i];
      chickenStoreList[i] = null;
      findAnswer(index + 1, i + 1);
      chickenStoreList[i] = selected[index];
    }
  }
};

findAnswer(0, 0);
console.log(answer);
