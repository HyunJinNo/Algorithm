const input = require("fs").readFileSync("/dev/stdin").toString();

// 100 <= N, M <= 100_000
const [N, M] = input.trim().split(" ").map(Number);
const volume = N * 7 / 100;
console.log((Math.floor((volume) * 10000 / (N + M)) / 100).toFixed(2));