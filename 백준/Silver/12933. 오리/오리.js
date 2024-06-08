const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const str = require("fs").readFileSync(path).toString(); // 5 <= str <= 2_500
let answer = 0;
const len = str.length;
const arr = Array(5).fill(0);

loop: for (let index = 0; index < len; index++) {
  switch (str[index]) {
    case "q":
      arr[0]++;
      answer = Math.max(answer, arr[0]);
      break;
    case "u":
      if (arr[0] > arr[1]) {
        arr[1]++;
        break;
      } else {
        answer = -1;
        break loop;
      }
    case "a":
      if (arr[1] > arr[2]) {
        arr[2]++;
        break;
      } else {
        answer = -1;
        break loop;
      }
    case "c":
      if (arr[2] > arr[3]) {
        arr[3]++;
        break;
      } else {
        answer = -1;
        break loop;
      }
    case "k":
      if (arr[3] > arr[4]) {
        for (let i = 0; i <= 3; i++) {
          arr[i]--;
        }
        break;
      } else {
        answer = -1;
        break loop;
      }
    default:
      break;
  }
}

if (arr[0] !== 0) {
  console.log(-1);
} else {
  console.log(answer);
}
