const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");
const P = Number(input[0]); // 테스트 케이스의 개수, 1 <= P <= 1_000
let answer = "";

for (let i = 1; i <= P; i++) {
  const count = {
    TTT: 0,
    TTH: 0,
    THT: 0,
    THH: 0,
    HTT: 0,
    HTH: 0,
    HHT: 0,
    HHH: 0,
  };

  const str = input[i].trim();

  for (let j = 0; j < 38; j++) {
    count[str.slice(j, j + 3)]++;
  }

  answer += `${Object.values(count).join(" ")}\n`;
}

console.log(answer.trimEnd());
