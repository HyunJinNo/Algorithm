const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString();

// 1 <= A <= B <= 1_000
const [A, B] = input.split(" ").map(Number);
const arr = [];
let index = 0;
let num = 1;
let answer = 0;

loop: while (true) {
  for (let iter = 0; iter < num; iter++) {
    arr.push(num);
    index++;

    if (index >= A && index <= B) {
      answer += num;
    }

    if (index === B) {
      break loop;
    }
  }

  num++;
}

console.log(answer);