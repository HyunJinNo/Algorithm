const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString().split("\n");

const G = Number(input[0]); // 게이트의 수, 1 <= G <= 100_000
const P = Number(input[0]); // 비행기의 수, 1 <= P <= 100_000
const parent = Array.from({ length: G + 1 }, (_value, index) => index);
let answer = 0;

const find = (x) => {
  if (parent[x] !== x) {
    parent[x] = find(parent[x]);
  }
  return parent[x];
};

const union = (x, y) => {
  const rootX = find(x);
  const rootY = find(y);

  if (rootX === rootY) {
    return;
  }

  parent[Math.max(rootX, rootY)] = Math.min(rootX, rootY);
};

for (let i = 2; i < 2 + P; i++) {
  const value = Number(input[i]); // 1 <= g <= G
  const gate = find(value);

  if (gate === 0) {
    break;
  }

  union(gate, gate - 1);
  answer++;
}

console.log(answer);