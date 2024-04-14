const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const n = Number(input[0]); // 동서방향 도로의 개수, 5 <= n <= 1_000
const w = Number(input[1]); // 사건의 개수, 1 <= w <= 1_000
const cache = Array.from(Array(w), () => new Map<string, [number, string]>()); // [index, position]
const arr: number[][] = [];

for (let i = 2; i <= w + 1; i++) {
  arr.push(input[i].split(" ").map(Number));
}

/**
 * 두 대의 경찰차가 이동하는 거리의 최솟값을 구하는 함수
 * @param index 처리해야 할 사건
 * @param position 각 경찰차의 위치
 * @returns 두 대의 경찰차가 이동하는 거리의 최솟값
 */
const solve = (index: number, position: string): [number, string] => {
  if (index == w) {
    return [0, ""];
  } else if (cache[index].has(position)) {
    return cache[index].get(position)!;
  }

  const [row1, col1, row2, col2] = position.split(" ").map(Number);

  let temp = solve(
    index + 1,
    `${arr[index][0]} ${arr[index][1]} ${row2} ${col2}`
  );
  let result: [number, string] = [
    Math.abs(arr[index][0] - row1) + Math.abs(arr[index][1] - col1) + temp[0],
    `1${temp[1]}`,
  ];

  temp = solve(index + 1, `${row1} ${col1} ${arr[index][0]} ${arr[index][1]}`);
  if (
    result[0] >
    Math.abs(arr[index][0] - row2) + Math.abs(arr[index][1] - col2) + temp[0]
  ) {
    result = [
      Math.abs(arr[index][0] - row2) + Math.abs(arr[index][1] - col2) + temp[0],
      `2${temp[1]}`,
    ];
  }

  cache[index].set(position, result);
  return result;
};

const answer = solve(0, `1 1 ${n} ${n}`);
let str = "";
for (let i = 0; i < w; i++) {
  str += `${answer[1][i]}\n`;
}
console.log(answer[0]);
console.log(str);
