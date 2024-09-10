const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString();
const num = Number(input);

if (num >= 620) {
  console.log("Red");
} else if (num >= 590) {
  console.log("Orange");
} else if (num >= 570) {
  console.log("Yellow");
} else if (num >= 495) {
  console.log("Green");
} else if (num >= 450) {
  console.log("Blue");
} else if (num >= 425) {
  console.log("Indigo");
} else {
  console.log("Violet");
}
