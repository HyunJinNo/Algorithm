const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");

// 1 <= N <= 1_000
// 1 <= M <= 1_000
const [N, M] = input[0].split(" ").map(Number);
const board: number[][] = [];
let key = 2;
const keyMap = new Map<number, number>();
keyMap.set(1, 0);
for (let i = 1; i <= N; i++) {
  board.push(input[i].trim().split("").map(Number));
}

const search = (row: number, col: number) => {
  board[row][col] = key;
  keyMap.set(key, (keyMap.get(key) ?? 0) + 1);

  if (row - 1 >= 0 && board[row - 1][col] === 0) {
    search(row - 1, col);
  }
  if (row + 1 < N && board[row + 1][col] === 0) {
    search(row + 1, col);
  }
  if (col - 1 >= 0 && board[row][col - 1] === 0) {
    search(row, col - 1);
  }
  if (col + 1 < M && board[row][col + 1] === 0) {
    search(row, col + 1);
  }
};

for (let row = 0; row < N; row++) {
  for (let col = 0; col < M; col++) {
    if (board[row][col] === 0) {
      search(row, col);
      key++;
    }
  }
}

const answer = Array.from(Array(N), () => Array<number>(M).fill(0));

for (let row = 0; row < N; row++) {
  for (let col = 0; col < M; col++) {
    if (board[row][col] === 1) {
      answer[row][col] = 1;
      const keySet = new Set<number>();

      if (row - 1 >= 0 && !keySet.has(board[row - 1][col])) {
        const key = board[row - 1][col];
        answer[row][col] += keyMap.get(key)!;
        keySet.add(key);
      }
      if (row + 1 < N && !keySet.has(board[row + 1][col])) {
        const key = board[row + 1][col];
        answer[row][col] += keyMap.get(key)!;
        keySet.add(key);
      }
      if (col - 1 >= 0 && !keySet.has(board[row][col - 1])) {
        const key = board[row][col - 1];
        answer[row][col] += keyMap.get(key)!;
        keySet.add(key);
      }
      if (col + 1 < M && !keySet.has(board[row][col + 1])) {
        answer[row][col] += keyMap.get(board[row][col + 1])!;
      }

      answer[row][col] %= 10;
    }
  }
}

let str = "";
answer.forEach((arr) => {
  str += `${arr.join("")}\n`;
});
console.log(str);
