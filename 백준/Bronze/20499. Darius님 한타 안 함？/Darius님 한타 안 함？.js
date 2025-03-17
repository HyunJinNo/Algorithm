const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();

const [K, D, A] = input.split("/").map(Number);

if (K + A < D || D === 0) {
  console.log("hasu");
} else {
  console.log("gosu");
}
