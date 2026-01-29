const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().trim();
const charSet = new Set();

for (const char of input) {
  charSet.add(char);
}

if (charSet.has("M") && charSet.has("O") && charSet.has("B") && charSet.has("I") && charSet.has("S")) {
  console.log("YES");
} else {
  console.log("NO");
}