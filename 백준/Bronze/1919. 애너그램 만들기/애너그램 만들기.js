const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const str1 = input[0].trim();
const str2 = input[1].trim();
const map1 = new Map();
const map2 = new Map();

for (let i = 0; i < 26; i++) {
  map1.set(String.fromCharCode(i + 97), 0);
  map2.set(String.fromCharCode(i + 97), 0);
}

for (const c of str1) {
  map1.set(c, map1.get(c) + 1);
}

for (const c of str2) {
  map2.set(c, map2.get(c) + 1);
}

let answer = 0;
for (let i = 0; i < 26; i++) {
  const c = String.fromCharCode(i + 97);
  answer += Math.abs(map1.get(c) - map2.get(c));
}

console.log(answer);
