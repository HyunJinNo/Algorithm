const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
console.log(
  input.split("").reduce((total, current) => {
    if (current === "\n") {
      return total + 1;
    } else {
      return total;
    }
  }, 0),
);
