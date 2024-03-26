const path = (process.platform === "linux") ? "/dev/stdin" : "./JavaScript/input.txt";
const input = require('fs').readFileSync(path).toString();
const x = Number(input); // 갖고 싶은 막대의 길이(x cm), 1 <= x <= 64

const bitCount = (x) => {
  if (x === 0) {
    return 0;
  } else {
    return x % 2 + bitCount(Math.floor(x / 2));
  }
}

console.log(bitCount(x));