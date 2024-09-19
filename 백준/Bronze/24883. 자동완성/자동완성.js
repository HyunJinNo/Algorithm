const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();

if (input === "N" || input === "n") {
  console.log("Naver D2");
} else {
  console.log("Naver Whale");
}
