const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const n = Number(input[0]); // 정점의 개수, 1 <= n <= 100_000
const inorder = new Int32Array(input[1].split(" ").map(Number)); // (left)(root)(right)
const postorder = new Int32Array(input[2].split(" ").map(Number)); // (left)(right)(root)
let answer = "";

const printPreorder = (
  startIndex1: number,
  endIndex1: number,
  startIndex2: number,
  endIndex2: number
) => {
  const length = endIndex2 - startIndex2 + 1;

  if (length === 0) {
    return;
  }

  const root = postorder[endIndex2];
  answer += `${root} `;

  // inorder에서 root 위치 찾기
  const index = inorder.indexOf(root, startIndex1);
  const leftLength = index - startIndex1;

  // 왼쪽 서브트리 탐색
  printPreorder(
    startIndex1,
    index - 1,
    startIndex2,
    startIndex2 + leftLength - 1
  );

  // 오른쪽 서브트리 탐색
  printPreorder(index + 1, endIndex1, startIndex2 + leftLength, endIndex2 - 1);
};

printPreorder(0, n - 1, 0, n - 1);
console.log(answer);
