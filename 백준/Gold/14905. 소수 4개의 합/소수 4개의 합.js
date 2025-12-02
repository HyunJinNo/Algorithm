const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

let answer = "";
const n = 100_000_000;
const isPrime = new Int8Array(n + 1).fill(true);
isPrime[0] = false;
isPrime[1] = false;
const primeNumList = [];

for (let i = 2; i * i <= n; i++) {
  if (isPrime[i]) {
    primeNumList.push(i);

    for (let j = i * i; j <= n; j += i) {
      isPrime[j] = false;
    }
  }
}

input.forEach((line) => {
  const num = Number(line); // 1 <= num <= 100_000_000

  if (num < 8) {
    answer += "Impossible.\n";
  } else {
    loop: for (let i = 0; i < primeNumList.length; i++) {
      for (let j = i; j < primeNumList.length; j++) {
        for (let k = j; k < primeNumList.length; k++) {
          const sum = primeNumList[i] + primeNumList[j] + primeNumList[k];

          if (isPrime[num - sum]) {
            answer += `${primeNumList[i]} ${primeNumList[j]} ${primeNumList[k]} ${num - sum}\n`;
            break loop;
          }
        }
      }
    }
  }
});

console.log(answer.trim());