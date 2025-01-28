const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const N = Number(input[0]); // 점의 개수, 3 <= N <= 1_500
const arr = [];
let answer = 0;

for (let i = 1; i <= N; i++) {
  arr.push(input[i].split(" ").map(Number));
}

for (let i = 2; i < N; i++) {
  for (let j = 1; j < i; j++) {
    for (let k = 0; k < j; k++) {
      const [x1, y1] = arr[i];
      const [x2, y2] = arr[j];
      const [x3, y3] = arr[k];

      const vector1 = [x1 - x2, y1 - y2];
      const vector2 = [x1 - x3, y1 - y3];
      const vector3 = [x2 - x3, y2 - y3];

      if (
        vector1[0] * vector2[0] + vector1[1] * vector2[1] === 0 ||
        vector1[0] * vector3[0] + vector1[1] * vector3[1] === 0 ||
        vector2[0] * vector3[0] + vector2[1] * vector3[1] === 0
      ) {
        answer++;
      }
    }
  }
}

console.log(answer);
