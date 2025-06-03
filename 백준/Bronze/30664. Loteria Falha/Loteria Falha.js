const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

let index = 0;
let answer = "";

while (true) {
  const num = BigInt(input[index++]);

  if (num === 0n) {
    break;
  }

  if (num % 42n === 0n) {
    answer += "PREMIADO\n";
  } else {
    answer += "TENTE NOVAMENTE\n";
  }
}

console.log(answer.trimEnd());
