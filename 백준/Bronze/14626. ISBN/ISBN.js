const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();
const ISBN = input.trim();
let sum = 0;
let num = 0;

for (let i = 0; i < 13; i++) {
  if (ISBN[i] === "*") {
    num = i % 2 === 0 ? 1 : 3;
  } else {
    sum += i % 2 === 0 ? Number(ISBN[i]) : Number(ISBN[i]) * 3;
  }
}

for (let answer = 0; answer <= 9; answer++) {
  if ((sum + num * answer) % 10 === 0) {
    console.log(answer);
    break;
  }
}