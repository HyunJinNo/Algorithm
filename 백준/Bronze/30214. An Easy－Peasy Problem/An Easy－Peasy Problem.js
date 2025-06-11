const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();
const [s1, s2] = input.split(" ").map(Number);

console.log(s1 >= s2 / 2 ? "E" : "H");
