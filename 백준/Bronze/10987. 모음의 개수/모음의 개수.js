const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();

console.log(
  input.split("").reduce((total, current) => {
    if (["a", "e", "i", "o", "u"].includes(current)) {
      return total + 1;
    } else {
      return total;
    }
  }, 0),
);
