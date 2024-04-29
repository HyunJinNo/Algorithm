const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const N = Number(input[0]); // 이진 트리의 노드의 개수, 1 <= N <= 26
let answer = "";

const tree = new Map<string, string[]>();
for (let i = 1; i <= N; i++) {
  const temp = input[i].trim().split(" ");
  tree.set(temp[0], temp.slice(1));
}

const printPreorder = (root: string) => {
  const temp = tree.get(root)!;

  answer += `${root}`;
  if (temp[0] !== ".") printPreorder(temp[0]);
  if (temp[1] !== ".") printPreorder(temp[1]);
};

const printInorder = (root: string) => {
  const temp = tree.get(root)!;

  if (temp[0] !== ".") printInorder(temp[0]);
  answer += `${root}`;
  if (temp[1] !== ".") printInorder(temp[1]);
};

const printPostorder = (root: string) => {
  const temp = tree.get(root)!;

  if (temp[0] !== ".") printPostorder(temp[0]);
  if (temp[1] !== ".") printPostorder(temp[1]);
  answer += `${root}`;
};

printPreorder("A");
console.log(answer);

answer = "";
printInorder("A");
console.log(answer);

answer = "";
printPostorder("A");
console.log(answer);
