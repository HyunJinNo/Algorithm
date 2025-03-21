const path =
  process.platform === "linux" ? "/dev/stdin" : "./algorithm/input.txt";
const input = require("fs").readFileSync(path).toString().split("\n");

/**
 * @param {string} position
 */
const convertPosition = (position) => {
  const row = position.charCodeAt(0) - 65;
  const col = Number(position[1]);

  return [row, col];
};

const visited = new Set();
visited.add(input[0].trim());

const position = convertPosition(input[0].trim());
let isValid = true;

for (let i = 1; i < 37; i++) {
  if (i === 36) {
    const [row, col] = convertPosition(input[0].trim());

    if (
      (Math.abs(position[0] - row) === 2 &&
        Math.abs(position[1] - col) === 1) ||
      (Math.abs(position[0] - row) === 1 && Math.abs(position[1] - col) === 2)
    ) {
      position[0] = row;
      position[1] = col;
    } else {
      isValid = false;
    }

    break;
  }

  if (visited.has(input[i].trim())) {
    isValid = false;
    break;
  }

  visited.add(input[i].trim());
  const [row, col] = convertPosition(input[i].trim());

  if (
    (Math.abs(position[0] - row) === 2 && Math.abs(position[1] - col) === 1) ||
    (Math.abs(position[0] - row) === 1 && Math.abs(position[1] - col) === 2)
  ) {
    position[0] = row;
    position[1] = col;
  } else {
    isValid = false;
    break;
  }
}

console.log(isValid ? "Valid" : "Invalid");
