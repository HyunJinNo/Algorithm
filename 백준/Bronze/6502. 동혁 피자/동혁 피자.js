const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
let index = 0;

while (true) {
  if (input[index].trim() === "0") {
    break;
  }

  const [r, w, l] = input[index++].split(" ").map(Number);
  const length = Math.sqrt(w * w + l * l) / 2;

  if (r >= length) {
    console.log(`Pizza ${index} fits on the table.`);
  } else {
    console.log(`Pizza ${index} does not fit on the table.`);
  }
}
