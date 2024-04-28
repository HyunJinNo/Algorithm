const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const C = Number(input[0]); // 테스트 케이스의 수, 1 <= C <= 100

let answer = "";
const findPostOrder = (preorder: Int16Array, inorder: Int16Array) => {
  const N = preorder.length; // 트리에 포함된 노드의 수

  if (N === 0) {
    return;
  }

  const root = preorder[0];

  // 중위 탐색 결과에서 루트의 위치 찾기
  const index = inorder.findIndex((value) => value === root);

  findPostOrder(preorder.subarray(1, index + 1), inorder.subarray(0, index));
  findPostOrder(preorder.subarray(index + 1), inorder.subarray(index + 1));

  answer += `${root} `;
};

for (let i = 0; i < C; i++) {
  answer = "";
  const N = Number(input[3 * i + 1]); // 트리에 포함된 노드의 수, 1 <= N <= 100
  const preorder = new Int16Array(input[3 * i + 2].split(" ").map(Number));
  const inorder = new Int16Array(input[3 * i + 3].split(" ").map(Number));
  findPostOrder(preorder, inorder);
  console.log(answer);
}
