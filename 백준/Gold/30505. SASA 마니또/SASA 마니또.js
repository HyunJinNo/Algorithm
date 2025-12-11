const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// N: 마니또 활동에 참가하는 학생의 수, 2 <= N <= 100_000
// M: 밝혀진 정보의 수, 1 <= M <= N
const [N, M] = input[0].split(" ").map(Number);
const s = Number(input[M + 1]); // 세종이의 번호, 1 <= s <= N
const arr = Array.from({ length: N }, (_, index) => index + 1);
const from = new Set(arr);
const to = new Set(arr);
let found = false;

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);

  if (a === s) {
    found = true;
    break;
  }

  from.delete(a);
  to.delete(b);
}

if (found) {
  console.log("NOJAM");
} else {
  to.delete(s);

  if (from.size === 2) {
    for (let num of to.values()) {
      from.delete(num);
    }

    if (from.size === 1) {
      console.log("NOJAM");
    } else {
      console.log(to.size);
    }
  } else {
    console.log(to.size);
  }
}