const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");
let answer = 0;

for (let i = 0; i < 8; i++) {
  const str = input[i].trim();

  for (let j = 0; j < 8; j++) {
    switch (str[j]) {
      case "P":
        answer++;
        break;
      case "p":
        answer--;
        break;
      case "N":
      case "B":
        answer += 3;
        break;
      case "n":
      case "b":
        answer -= 3;
        break;
      case "R":
        answer += 5;
        break;
      case "r":
        answer -= 5;
        break;
      case "Q":
        answer += 9;
        break;
      case "q":
        answer -= 9;
        break;
    }
  }
}

console.log(answer);