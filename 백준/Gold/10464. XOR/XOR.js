const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");
const T = Number(input[0]); // 테스트 케이스의 개수, 1 <= T <= 1_000

const findXOR = (num) => {
  switch (num % 4) {
    case 0:
      return num;
    case 1:
      return 1;
    case 2:
      return num + 1;
    default: // case 3
      return 0;
  }
};

for (let i = 1; i <= T; i++) {
  // 1 <= S <= F <= 1_000_000_000
  const [S, F] = input[i].trim().split(" ").map(Number);
  console.log(findXOR(S - 1) ^ findXOR(F));
}