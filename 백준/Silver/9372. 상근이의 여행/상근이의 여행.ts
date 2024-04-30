const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const T = Number(input[0]); // 테스트 케이스의 수, 1 <= T <= 100
let index = 1;
let answer = 0;
let visited: boolean[];
const map = new Map<number, number[]>();

const traverse = (src: number) => {
  const dst = map.get(src)!;
  const length = dst.length;

  for (let i = 0; i < length; i++) {
    if (!visited[dst[i]]) {
      answer++;
      visited[dst[i]] = true;
      traverse(dst[i]);
    }
  }
};

for (let i = 0; i < T; i++) {
  // N: 국가의 수, 2 <= N <= 1_000
  // M: 비행기의 종류, 1 <= M <= 10_000
  const [N, M] = input[index++].split(" ").map(Number);
  answer = 0;
  visited = Array<boolean>(N + 1).fill(false);
  map.clear();
  for (let i = 1; i <= N; i++) {
    map.set(i, []);
  }

  for (let j = 0; j < M; j++) {
    const [a, b] = input[index++].split(" ").map(Number);
    map.get(a)?.push(b);
    map.get(b)?.push(a);
  }

  visited[1] = true;
  traverse(1);
  console.log(answer);
}
