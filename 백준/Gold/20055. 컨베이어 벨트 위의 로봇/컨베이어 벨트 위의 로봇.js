const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 컨베이어 벨트의 길이, 2 <= N <= 100
// K: 종료될 때 내구도가 0인 칸의 개수, 1 <= K <= 200
let [N, K] = input[0].trim().split(" ").map(Number);
const A = new Int16Array(input[1].trim().split(" ").map(Number)); // 컨베이어 벨트의 내구도
const arr = Array(2 * N).fill(false);
let start = 0;
let end = N - 1;
let answer = 0;

const step1 = () => {
  start = (start + (N * 2 - 1)) % (N * 2);
  end = (end + (N * 2 - 1)) % (N * 2);
};

const step2 = () => {
  for (let i = 0; i < N + 1; i++) {
    const index = (end + 1 + (N * 2 - i)) % (N * 2);

    if (i === 0) {
      arr[index] = false;
    } else if (i === 1) {
      if (arr[index]) {
        arr[index] = false;
      }
    } else if (arr[index]) {
      if (!arr[(index + 1) % (N * 2)] && A[(index + 1) % (N * 2)] > 0) {
        A[(index + 1) % (N * 2)]--;
        arr[(index + 1) % (N * 2)] = true;
        arr[index] = false;
        if (A[(index + 1) % (N * 2)] <= 0) {
          K--;
        }
      }
    }
  }
};

const step3 = () => {
  if (A[start] > 0 && !arr[start]) {
    A[start]--;
    arr[start] = true;
    if (A[start] <= 0) {
      K--;
    }
  }
};

while (K > 0) {
  step1();
  step2();
  step3();
  answer++;
}

console.log(answer);
