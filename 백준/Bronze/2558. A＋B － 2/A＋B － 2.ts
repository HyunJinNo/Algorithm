const fs = require('fs');
const rl = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const a = parseInt(rl[0]);
const b = parseInt(rl[1]);
console.log(a + b);