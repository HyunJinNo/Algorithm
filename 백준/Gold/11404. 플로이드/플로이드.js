const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const n = Number(input[0]); // 도시의 개수, 2 <= n <= 100
const m = Number(input[1]); // 버스의 개수, 1 <= m <= 100_000
const arr = Array.from(Array(n), () => Array(n).fill(Infinity));

for (let i = 2; i < m + 2; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  arr[a - 1][b - 1] = Math.min(arr[a - 1][b - 1], c);
}

for (let middle = 0; middle < n; middle++) {
  for (let s = 0; s < n; s++) {
    for (let e = 0; e < n; e++) {
      if (s === e) {
        continue;
      }

      arr[s][e] = Math.min(arr[s][e], arr[s][middle] + arr[middle][e]);
    }
  }
}

for (let s = 0; s < n; s++) {
  for (let e = 0; e < n; e++) {
    if (arr[s][e] === Infinity) {
      arr[s][e] = 0;
    }
  }
}

let answer = "";

arr.forEach((subArr) => {
  answer += `${subArr.join(" ")}\n`;
});

console.log(answer);
