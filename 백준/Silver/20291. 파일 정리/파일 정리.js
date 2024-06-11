const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const N = Number(input[0]); // 파일의 개수, 1 <= N <= 50_000
const map = new Map();
const result = [];
let answer = "";

for (let i = 1; i <= N; i++) {
  const [_, filename] = input[i].trim().split(".");
  map.set(filename, (map.get(filename) ?? 0) + 1);
}

for (let arr of map) {
  result.push(arr);
}

result.sort((arr1, arr2) => {
  if (arr1[0] > arr2[0]) {
    return 1;
  } else {
    return -1;
  }
});

for (let arr of result) {
  answer += `${arr[0]} ${arr[1]}\n`;
}

console.log(answer);
