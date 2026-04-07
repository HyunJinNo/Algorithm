const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

// g: 고고학자들이 찾고자 하는 단어 W의 길이, 1 <= g <= 3_000
// n: 발굴된 벽화에서 추출한 문자열 S의 길이, g <= n <= 3_000_000
const [g, n] = input[0].split(" ").map(Number);
const W = input[1].trim();
const S = input[2].trim();
const wArr = Array(52).fill(0);
const SArr = Array(52).fill(0);

for (let i = 0; i < g; i++) {
  if (W[i] >= "A" && W[i] <= "Z") {
    wArr[W.charCodeAt(i) - "A".charCodeAt()]++;
  } else if (W[i] >= "a" && W[i] <= "z") {
    wArr[W.charCodeAt(i) - "a".charCodeAt() + 26]++;
  }
}

const check = () => {
  let flag = true;

  for (let i = 0; i < g; i++) {
    if (W[i] >= "A" && W[i] <= "Z") {
      if (wArr[W.charCodeAt(i) - "A".charCodeAt()] !== SArr[W.charCodeAt(i) - "A".charCodeAt()]) {
        flag = false;
        break;
      }
    } else if (W[i] >= "a" && W[i] <= "z") {
      if (wArr[W.charCodeAt(i) - "a".charCodeAt() + 26] !== SArr[W.charCodeAt(i) - "a".charCodeAt() + 26]) {
        flag = false;
        break;
      }
    }
  }

  if (flag) {
    answer++;
  }
};

let answer = 0;

for (let i = 0; i < g - 1; i++) {
  if (S[i] >= "A" && S[i] <= "Z") {
    SArr[S.charCodeAt(i) - "A".charCodeAt()]++;
  } else if (S[i] >= "a" && S[i] <= "z") {
    SArr[S.charCodeAt(i) - "a".charCodeAt() + 26]++;
  }
}

for (let i = g - 1; i < n; i++) {
  if (S[i] >= "A" && S[i] <= "Z") {
    SArr[S.charCodeAt(i) - "A".charCodeAt()]++;
  } else if (S[i] >= "a" && S[i] <= "z") {
    SArr[S.charCodeAt(i) - "a".charCodeAt() + 26]++;
  }

  check();

  if (S[i - g + 1] >= "A" && S[i - g + 1] <= "Z") {
    SArr[S.charCodeAt(i - g + 1) - "A".charCodeAt()]--;
  } else if (S[i - g + 1] >= "a" && S[i - g + 1] <= "z") {
    SArr[S.charCodeAt(i - g + 1) - "a".charCodeAt() + 26]--;
  }
}

console.log(answer);