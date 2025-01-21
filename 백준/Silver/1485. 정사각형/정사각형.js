const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const T = Number(input[0]); // 테스트 케이스의 수

for (let i = 1; i <= T; i++) {
  const a = input[(i - 1) * 4 + 1].split(" ").map(Number);
  const b = input[(i - 1) * 4 + 2].split(" ").map(Number);
  const c = input[(i - 1) * 4 + 3].split(" ").map(Number);
  const d = input[i * 4].split(" ").map(Number);

  const vector = [];
  vector.push([a[0] - b[0], a[1] - b[1]]);
  vector.push([a[0] - c[0], a[1] - c[1]]);
  vector.push([a[0] - d[0], a[1] - d[1]]);
  const arr = vector.map((value) => ({
    vector: value,
    length: value[0] * value[0] + value[1] * value[1],
  }));

  arr.sort((value1, value2) => value1.length - value2.length);

  if (
    arr[0].vector[0] * arr[1].vector[0] +
      arr[0].vector[1] * arr[1].vector[1] ===
      0 &&
    arr[0].length === arr[1].length &&
    arr[2].length === arr[0].length + arr[1].length &&
    arr[2].vector[0] === arr[0].vector[0] + arr[1].vector[0] &&
    arr[2].vector[1] === arr[0].vector[1] + arr[1].vector[1]
  ) {
    console.log(1);
  } else {
    console.log(0);
  }
}
