const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const N = Number(input); // 1 <= N <= 5

switch (N) {
  case 1:
    console.log("2024 8");
    break;
  case 2:
    console.log("2025 3");
    break;
  case 3:
    console.log("2025 10");
    break;
  case 4:
    console.log("2026 5");
    break;
  case 5:
    console.log("2026 12");
    break;
  default:
    break;
}
