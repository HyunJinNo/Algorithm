const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const str = require("fs").readFileSync(path).toString().trim();
const arr = Array(str.length).fill("");

const solve = (start, end) => {
  if (start > end) {
    return;
  }

  let index = -1;
  let char = "[";

  for (let i = start; i <= end; i++) {
    if (str[i].charCodeAt(0) < char.charCodeAt(0)) {
      index = i;
      char = str[i];
    }
  }

  arr[index] = str[index];
  console.log(arr.join(""));

  solve(index + 1, end);
  solve(start, index - 1);
};

solve(0, str.length - 1);
