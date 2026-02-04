const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const A = input[0].trim();
const B = input[1].trim();
let syllableA = "";
let syllableB = "";

for (let i = 0; i < A.length; i++) {
  if (A[i] === "a" || A[i] === "e" || A[i] === "i" || A[i] === "o" || A[i] === "u") {
    for (let j = i + 1; j < A.length; j++) {
      if (A[j] !== "a" && A[j] !== "e" && A[j] !== "i" && A[j] !== "o" && A[j] !== "u") {
        syllableA = A.slice(0, j);
        break;
      }
    }
    break;
  }
}

for (let i = 0; i < B.length; i++) {
  if (B[i] === "a" || B[i] === "e" || B[i] === "i" || B[i] === "o" || B[i] === "u") {
    for (let j = i + 1; j < B.length; j++) {
      if (B[j] !== "a" && B[j] !== "e" && B[j] !== "i" && B[j] !== "o" && B[j] !== "u") {
        syllableB = B.slice(0, j);
        break;
      }
    }
    break;
  }
}

if (syllableA !== "" && syllableB !== "") {
  console.log(syllableA + syllableB);
} else {
  console.log("no such exercise");
}