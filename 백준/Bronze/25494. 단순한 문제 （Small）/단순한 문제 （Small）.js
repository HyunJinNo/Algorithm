const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const T = Number(input[0]); // 테스트 케이스의 수, 1 <= T <= 100
let answer = "";

for (let i = 1; i <= T; i++) {
  // 1 <= a, b, c <= 60
  const [a, b, c] = input[i].split(" ").map(Number);
  let count = 0;

  for (let x = 1; x <= a; x++) {
    for (let y = 1; y <= b; y++) {
      for (let z = 1; z <= c; z++) {
        if (x % y === y % z && y % z === z % x) {
          count++;
        }
      }
    }
  }

  answer += `${count}\n`;
}

console.log(answer.trim());