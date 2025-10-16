const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(path).toString().trim().split("\n");

const time = new Map();
const graph = new Map();
const inDegree = new Map();
const answer = new Map();

for (const str of input) {
  const [a, b, c] = str.split(" ");
  time.set(a, Number(b));
  inDegree.set(a, c?.length ?? 0);
  answer.set(a, 0);

  if (!graph.has(a)) {
    graph.set(a, []);
  }

  if (c !== undefined) {
    for (let char of c) {
      if (!graph.has(char)) {
        graph.set(char, []);
      }

      graph.get(char).push(a);
    }
  }
}

const queue = [];
let peekIndex = 0;

for (const key of inDegree.keys()) {
  if (inDegree.get(key) === 0) {
    queue.push([key, time.get(key)]);
    answer.set(key, time.get(key));
  }
}

while (peekIndex < queue.length) {
  const [node, totalTime] = queue[peekIndex++];

  graph.get(node).forEach((nextNode) => {
    inDegree.set(nextNode, inDegree.get(nextNode) - 1);
    answer.set(nextNode, Math.max(answer.get(nextNode), totalTime + time.get(nextNode)));

    if (inDegree.get(nextNode) === 0) {
      queue.push([nextNode, answer.get(nextNode)]);
    }
  });
}

console.log(Math.max(...answer.values()));