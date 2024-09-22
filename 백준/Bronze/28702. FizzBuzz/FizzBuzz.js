const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const str1 = input[0].trim();
const str2 = input[1].trim();
const str3 = input[2].trim();
let num = 0;

if (Number.isInteger(Number(str3))) {
  num = Number(str3) + 1;
} else if (Number.isInteger(Number(str2))) {
  num = Number(str2) + 2;
} else {
  num = Number(str1) + 3;
}

if (num % 3 === 0 && num % 5 === 0) {
  console.log("FizzBuzz");
} else if (num % 3 === 0 && num % 5 !== 0) {
  console.log("Fizz");
} else if (num % 3 !== 0 && num % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(num);
}
