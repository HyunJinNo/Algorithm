const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const T = Number(input[0]); // 테스트 케이스의 수
let index = 1;
let answer = "";

/**
 * 후위 순회한 결과를 찾는 함수
 * @param {Int16Array} preorder 전위 순회한 결과
 * @param {Int16Array} inorder 중위 순회한 결과
 */
const findPostOrder = (preorder, inorder) => {
  const N = preorder.length; // 트리에 포함된 노드의 수

  if (N === 0) {
    return;
  }

  const root = preorder[0];

  // 중위 순회한 결과에서 루트 노드 찾기
  const index = inorder.findIndex((value) => value === root);

  findPostOrder(preorder.subarray(1, index + 1), inorder.subarray(0, index));
  findPostOrder(preorder.subarray(index + 1), inorder.subarray(index + 1));
  answer += `${root} `;
};

for (let iter = 0; iter < T; iter++) {
  const n = Number(input[index++]); // 노드의 개수, 1 <= n <= 1_000
  const preorder = new Int16Array(input[index++].trim().split(" ").map(Number));
  const inorder = new Int16Array(input[index++].trim().split(" ").map(Number));
  answer = "";

  findPostOrder(preorder, inorder);
  console.log(answer);
}
