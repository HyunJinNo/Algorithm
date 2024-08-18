const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 정점의 개수, 1 <= N <= 100
const arr = [];

for (let i = 1; i <= N; i++) {
  arr.push(input[i].trim().split(" ").map(Number));
}

for (let m = 0; m < N; m++) {
  for (let s = 0; s < N; s++) {
    for (let e = 0; e < N; e++) {
      if (arr[s][m] + arr[m][e] >= 2) {
        arr[s][e] = 1;
      }
    }
  }
}

arr.forEach((temp) => {
  console.log(temp.toString().split(",").join(" "));
});
