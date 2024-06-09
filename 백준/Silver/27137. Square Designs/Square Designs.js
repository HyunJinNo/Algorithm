const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();

// 1 <= M <= 18
// 1 <= N <= 18
const [M, N] = input.split(" ").map(Number);
const strs = Array(Math.max(M, N) + 2).fill("");

const makeBox = (index) => {
  let temp = "";

  strs[0] += "+";
  strs[index + 1] += "+";
  temp += "I";

  for (let iter = 0; iter < index; iter++) {
    strs[0] += "--";
    temp += "-X";
    strs[index + 1] += "--";
  }

  strs[0] += "-+";
  strs[index + 1] += "-+";
  temp += "-I";

  for (let i = 1; i <= index; i++) {
    strs[i] += temp;
  }
};

const addSpaces = () => {
  const len = strs[0].length;

  for (let i = M + 2; i < N + 2; i++) {
    for (let iter = 0; iter < len; iter++) {
      strs[i] += " ";
    }
  }

  for (let i = 0; i < N + 2; i++) {
    strs[i] += "          ";
  }
};

makeBox(M);
addSpaces();
makeBox(N);

for (let str of strs) {
  console.log(str);
}
