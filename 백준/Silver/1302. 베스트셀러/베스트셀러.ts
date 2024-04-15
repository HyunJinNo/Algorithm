const path: string =
  process.platform === "linux" ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: readonly string[] = require("fs")
  .readFileSync(path)
  .toString()
  .split("\n");
const n = Number(input[0]); // 책의 개수, 1 <= n <= 1_000
const map = new Map<string, number>();
let answer = "";
let count = -1; // 가장 많이 팔린 책의 개수

for (let i = 1; i <= n; i++) {
  const book = input[i].trim();
  map.set(book, (map.get(book) ?? 0) + 1);
  const temp = map.get(book)!;
  if (count < temp) {
    answer = book;
    count = temp;
  } else if (count === temp && answer > book) {
    answer = book;
  }
}
console.log(answer);
