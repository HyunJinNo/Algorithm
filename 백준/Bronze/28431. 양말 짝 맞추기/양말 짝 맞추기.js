const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const numSet = new Set();

for (let i = 0; i < 5; i++) {
  const num = Number(input[i]);

  if (numSet.has(num)) {
    numSet.delete(num);
  } else {
    numSet.add(num);
  }
}

let answer = 0;
for (const num of numSet) {
  answer = num;
}
console.log(answer);
