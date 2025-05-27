const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// 10 <= R, C <= 50
const [R, C] = input[0].split(" ").map(Number);
const ranking = Array(10).fill([0, 0]); // [num, pos]

for (let i = 1; i <= R; i++) {
  for (let j = C - 2; j >= 3; j--) {
    if (input[i][j] !== ".") {
      const num = Number(input[i][j]);
      ranking[num] = [num, j];
      break;
    }
  }
}
ranking.sort((a, b) => b[1] - a[1]);
const result = Array(10).fill(0);
let pos = ranking[0][1];
let rank = 1;

for (let i = 0; i < 9; i++) {
  if (ranking[i][1] !== pos) {
    pos = ranking[i][1];
    rank++;
  }

  result[ranking[i][0]] = rank;
}

console.log(
  result
    .slice(1)
    .reduce((total, current) => (total += `${current}\n`), "")
    .trim(),
);
