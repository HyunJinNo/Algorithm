const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./src/input.txt";
const input: string = require("fs").readFileSync(path).toString().trim();
const len = input.length;
const arr = Array<number>(10).fill(0);

for (let i = 0; i < len; i++) {
  if (input[i] === "6" || input[i] === "9") {
    if (arr[6] === arr[9]) {
      arr[6]++;
    } else {
      arr[9]++;
    }
  } else {
    arr[Number(input[i])]++;
  }
}

console.log(Math.max(...arr));
