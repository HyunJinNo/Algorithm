const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");
let index = 0;
let answer = "";

while (true) {
  let n = BigInt(input[index++]);

  if (n === 0n) {
    break;
  } else if (n === 1n) {
    answer += "{ }\n";
    continue;
  }

  n -= 1n;
  const result = [];

  let i = 0;
  while (n > 0n) {
    if (n & (1n << BigInt(i))) {
      result.push(3n ** BigInt(i));
      n ^= 1n << BigInt(i);
    }

    i++;
  }

  answer += `{ ${result.toString().replaceAll(",", ", ")} }\n`;
}

process.stdout.write(answer.trim());
