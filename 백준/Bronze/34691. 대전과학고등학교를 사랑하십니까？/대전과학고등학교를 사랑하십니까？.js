const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
let index = 0;
let answer = "";

while (true) {
  const question = input[index++].trim();

  if (question === "end") {
    console.log(answer.trim());
    break;
  }

  if (question === "animal") {
    answer += "Panthera tigris\n";
  }

  if (question === "tree") {
    answer += "Pinus densiflora\n";
  }

  if (question === "flower") {
    answer += "Forsythia koreana\n";
  }
}