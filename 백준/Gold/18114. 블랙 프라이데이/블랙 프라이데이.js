const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// N: 물건의 개수, 1 <= N <= 5_000
// C: 무게, 1 <= C <= 100_000_000
const [N, C] = input[0].trim().split(" ").map(Number);
const arr = new Int32Array(input[1].trim().split(" ").map(Number)); // 1 <= arr[i] <= 100_000_000
let answer = 0;

arr.sort((a, b) => a - b);

// 물건을 1개 선택하는 경우
for (let i = 0; i < N; i++) {
  if (arr[i] === C) {
    answer = 1;
    break;
  } else if (arr[i] > C) {
    break;
  }
}

if (answer === 1) {
  console.log(1);
  process.exit(0);
}

// 물건을 2개 선택하는 경우
let left = 0;
let right = N - 1;

while (left < right) {
  const sum = arr[left] + arr[right];

  if (sum === C) {
    answer = 1;
    break;
  } else if (sum > C) {
    right--;
  } else {
    left++;
  }
}

if (answer === 1) {
  console.log(1);
  process.exit(0);
}

// 물건을 3개 선택하는 경우
loop: for (let i = 0; i < N; i++) {
  let left = i + 1;
  let right = N - 1;

  while (left < right) {
    const sum = arr[i] + arr[left] + arr[right];

    if (sum === C) {
      answer = 1;
      break loop;
    } else if (sum > C) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(answer);