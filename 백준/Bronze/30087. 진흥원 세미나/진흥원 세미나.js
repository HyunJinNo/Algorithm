const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const seminars = {
  Algorithm: "204",
  DataAnalysis: "207",
  ArtificialIntelligence: "302",
  CyberSecurity: "B101",
  Network: "303",
  Startup: "501",
  TestStrategy: "105",
};
const N = Number(input[0]);

for (let i = 1; i <= N; i++) {
  console.log(seminars[input[i].trim()]);
}
