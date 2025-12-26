const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

// N: 물건의 개수, 1 <= N <= 5_000
// C: 무게, 1 <= C <= 100_000_000
const [N, C] = input[0].trim().split(" ").map(Number);
const arr = new Int32Array(input[1].trim().split(" ").map(Number)); // 1 <= arr[i] <= 100_000_000
let answer = 0;

arr.sort((a, b) => a - b);

// 물건을 1개 선택하는 경우
let left = -1;
let right = N;

while (left <= right) {
  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === C) {
    answer = 1;
    break;
  } else if (arr[mid] > C) {
    right = mid - 1;
  } else {
    left = mid + 1;
  }
}

if (answer === 1) {
  console.log(1);
  process.exit(0);
}

// 물건을 2개 선택하는 경우
left = 0;
right = N - 1;

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