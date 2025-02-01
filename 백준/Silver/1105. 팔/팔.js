const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString();

let [L, R] = input.split(" ").map((str) => str.trim());
let answer = 0;

if (L.length !== R.length) {
  console.log(0);
} else {
  const length = L.length;

  for (let i = 0; i < length; i++) {
    if (L[i] !== R[i]) {
      break;
    }

    if (L[i] === "8") {
      answer++;
    }
  }

  console.log(answer);
}
