const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./src/input.txt";
const input: string = require("fs").readFileSync(path).toString().trim();
const N = Number(input); // 1 <= N <= 100

const arr = Array.from(Array((N - 1) * 4 + 1), () =>
  Array<string>((N - 1) * 4 + 1).fill("*")
);

const solve = (startIndex: number, endIndex: number) => {
  if (startIndex === endIndex) {
    return;
  }

  for (let row = startIndex + 1; row <= endIndex - 1; row++) {
    arr[row][startIndex + 1] = " ";
    arr[row][endIndex - 1] = " ";
  }
  for (let col = startIndex + 1; col <= endIndex - 1; col++) {
    arr[startIndex + 1][col] = " ";
    arr[endIndex - 1][col] = " ";
  }

  solve(startIndex + 2, endIndex - 2);
};

solve(0, (N - 1) * 4);
let answer = "";
arr.forEach((value) => {
  answer += `${value.join("")}\n`;
});
console.log(answer);
