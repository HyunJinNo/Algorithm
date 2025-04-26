const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

let answer = "";

input.forEach((str) => {
  answer += str.trim();
  answer += "\n";
});

process.stdout.write(answer.trim());
