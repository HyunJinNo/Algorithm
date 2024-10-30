const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().trim();

process.stdout.write(`:fan::fan::fan:
:fan::${input}::fan:
:fan::fan::fan:`);
