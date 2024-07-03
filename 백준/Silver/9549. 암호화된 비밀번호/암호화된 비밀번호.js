const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const T = Number(input[0]); // 테스트 케이스의 수, 1 <= T <= 100
let index = 1;

for (let i = 0; i < T; i++) {
  const str1 = input[index++].trim();
  const str2 = input[index++].trim();

  const len1 = str1.length;
  const len2 = str2.length;
  const arr1 = Array(26).fill(0);
  const arr2 = Array(26).fill(0);

  for (let j = 0; j < len2; j++) {
    arr1[str1[j].charCodeAt(0) - 97]++;
    arr2[str2[j].charCodeAt(0) - 97]++;
  }
  let key = arr2.join("");
  let flag = false;

  if (arr1.join("") === key) {
    console.log("YES");
    continue;
  }

  for (let j = len2; j < len1; j++) {
    arr1[str1[j].charCodeAt(0) - 97]++;
    arr1[str1[j - len2].charCodeAt(0) - 97]--;
    if (arr1.join("") === key) {
      flag = true;
      break;
    }
  }

  if (flag) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
