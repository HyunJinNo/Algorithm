const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

const n = Number(input[0]); // 도시의 개수, 1 <= n <= 100
const m = Number(input[1]); // 버스의 개수, 1 <= m <= 100_000
const arr = Array.from({ length: n }, () =>
  Array(n).fill({ cost: Infinity, routes: [] }),
);

for (let i = 2; i < m + 2; i++) {
  const [a, b, c] = input[i].split(" ").map(Number);
  if (arr[a - 1][b - 1].cost > c) {
    arr[a - 1][b - 1] = {
      cost: Math.min(arr[a - 1][b - 1].cost, c),
      routes: [a, b],
    };
  }
}

for (let middle = 0; middle < n; middle++) {
  for (let start = 0; start < n; start++) {
    for (let end = 0; end < n; end++) {
      if (start === end) {
        arr[start][end] = { cost: Infinity, routes: [] };
      } else if (
        arr[start][end].cost >
        arr[start][middle].cost + arr[middle][end].cost
      ) {
        arr[start][end] = {
          cost: arr[start][middle].cost + arr[middle][end].cost,
          routes: [
            ...arr[start][middle].routes,
            ...arr[middle][end].routes.slice(1),
          ],
        };
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  let str = "";
  for (let j = 0; j < n; j++) {
    str += `${arr[i][j].cost === Infinity ? 0 : arr[i][j].cost} `;
  }
  console.log(str);
}

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (arr[i][j].cost === Infinity) {
      console.log(0);
    } else {
      console.log(
        `${arr[i][j].routes.length} ${arr[i][j].routes
          .toString()
          .replaceAll(",", " ")}`,
      );
    }
  }
}
