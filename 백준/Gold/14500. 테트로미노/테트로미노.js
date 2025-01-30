const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

// N: 세로 크기, 4 <= N <= 500
// M: 가로 크기, 4 <= M <= 500
const [N, M] = input[0].split(" ").map(Number);
const arr = [];
let answer = 0;

for (let i = 1; i <= N; i++) {
  arr.push(new Int16Array(input[i].split(" ").map(Number)));
}

const blocks = [
  {
    width: 4,
    height: 1,
    value: [
      [0, 0],
      [0, 1],
      [0, 2],
      [0, 3],
    ],
  },
  {
    width: 1,
    height: 4,
    value: [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
    ],
  },
  {
    width: 2,
    height: 2,
    value: [
      [0, 0],
      [0, 1],
      [1, 0],
      [1, 1],
    ],
  },
  {
    width: 2,
    height: 3,
    value: [
      [0, 0],
      [1, 0],
      [2, 0],
      [2, 1],
    ],
  },
  {
    width: 3,
    height: 2,
    value: [
      [0, 0],
      [1, 0],
      [0, 1],
      [0, 2],
    ],
  },
  {
    width: 2,
    height: 3,
    value: [
      [0, 0],
      [0, 1],
      [1, 1],
      [2, 1],
    ],
  },
  {
    width: 3,
    height: 2,
    value: [
      [0, 2],
      [1, 0],
      [1, 1],
      [1, 2],
    ],
  },
  {
    width: 2,
    height: 3,
    value: [
      [0, 1],
      [1, 1],
      [2, 0],
      [2, 1],
    ],
  },
  {
    width: 3,
    height: 2,
    value: [
      [0, 0],
      [1, 0],
      [1, 1],
      [1, 2],
    ],
  },
  {
    width: 2,
    height: 3,
    value: [
      [0, 0],
      [0, 1],
      [1, 0],
      [2, 0],
    ],
  },
  {
    width: 3,
    height: 2,
    value: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 2],
    ],
  },
  {
    width: 2,
    height: 3,
    value: [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 1],
    ],
  },
  {
    width: 3,
    height: 2,
    value: [
      [0, 1],
      [0, 2],
      [1, 0],
      [1, 1],
    ],
  },
  {
    width: 2,
    height: 3,
    value: [
      [0, 1],
      [1, 0],
      [1, 1],
      [2, 0],
    ],
  },
  {
    width: 3,
    height: 2,
    value: [
      [0, 0],
      [0, 1],
      [1, 1],
      [1, 2],
    ],
  },
  {
    width: 3,
    height: 2,
    value: [
      [0, 0],
      [0, 1],
      [0, 2],
      [1, 1],
    ],
  },
  {
    width: 2,
    height: 3,
    value: [
      [0, 1],
      [1, 0],
      [1, 1],
      [2, 1],
    ],
  },
  {
    width: 3,
    height: 2,
    value: [
      [0, 1],
      [1, 0],
      [1, 1],
      [1, 2],
    ],
  },
  {
    width: 2,
    height: 3,
    value: [
      [0, 0],
      [1, 0],
      [1, 1],
      [2, 0],
    ],
  },
];

for (let i = 0; i < 19; i++) {
  for (let row = 0; row < N - blocks[i].height + 1; row++) {
    for (let col = 0; col < M - blocks[i].width + 1; col++) {
      const sum = blocks[i].value.reduce(
        (total, pos) => total + arr[row + pos[0]][col + pos[1]],
        0,
      );

      answer = Math.max(answer, sum);
    }
  }
}

console.log(answer);
