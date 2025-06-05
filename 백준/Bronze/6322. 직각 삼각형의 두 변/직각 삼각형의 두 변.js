const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

let index = 0;
let answer = "";

while (true) {
  const [a, b, c] = input[index++].split(" ").map(Number);

  if (a === 0 && b === 0 && c === 0) {
    break;
  }

  answer += `Triangle #${index}\n`;

  if (a === -1) {
    if (c > b) {
      answer += `a = ${Math.sqrt(c * c - b * b).toFixed(3)}\n\n`;
    } else {
      answer += "Impossible.\n\n";
    }
  } else if (b === -1) {
    if (c > a) {
      answer += `b = ${Math.sqrt(c * c - a * a).toFixed(3)}\n\n`;
    } else {
      answer += "Impossible.\n\n";
    }
  } else {
    answer += `c = ${Math.sqrt(a * a + b * b).toFixed(3)}\n\n`;
  }
}

console.log(answer.trimEnd());
