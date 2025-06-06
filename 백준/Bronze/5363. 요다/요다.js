const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const N = Number(input[0]); // 문장의 수
let answer = "";

for (let i = 1; i <= N; i++) {
  const words = input[i].trim().split(" ");
  answer += `${words.slice(2).join(" ")} ${words[0]} ${words[1]}\n`;
}

console.log(answer.trimEnd());
