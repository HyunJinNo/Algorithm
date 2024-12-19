const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const n = Number(input[0]); // 노드의 개수, 1 <= n <= 10_000
const graph = new Map();
const height = Array(n + 1).fill(-1);
let answer = 0;

for (let i = 1; i < n; i++) {
  const [parent, child, weight] = input[i].split(" ").map(Number);
  if (!graph.has(parent)) {
    graph.set(parent, []);
  }
  graph.get(parent).push([child, weight]);
}

/**
 * @param {number} node
 * @returns {number}
 */
const findDiameter = (node) => {
  const children = graph.get(node);
  if (children === undefined) {
    return 0;
  } else if (children.length === 1) {
    return children[0][1] + findHeight(children[0][0]);
  }

  const temp = [];
  children.forEach((child) => {
    temp.push(child[1] + findHeight(child[0]));
  });

  temp.sort((a, b) => b - a);
  const result = temp[0] + temp[1];

  return result;
};

/**
 * @param {number} node
 * @returns {number}
 */
const findHeight = (node) => {
  if (height[node] !== -1) {
    return height[node];
  } else if (!graph.has(node)) {
    height[node] = 0;
    return 0;
  }

  let result = 0;
  const children = graph.get(node);

  children.forEach((value) => {
    result = Math.max(result, value[1] + findHeight(value[0]));
  });

  height[node] = result;
  return result;
};

for (let i = 1; i <= n; i++) {
  answer = Math.max(answer, findDiameter(i));
}

console.log(answer);
