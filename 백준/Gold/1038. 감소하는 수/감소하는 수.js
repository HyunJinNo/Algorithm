const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();

let N = Number(input); // 0 <= N <= 1_000_000
const arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

/**
 * @param {number} index 0 ~ 9
 */
const findAnswer = (index, limit) => {
  if (N === 0 && index === 10) {
    let answer = 0;

    for (let i = 0; i < 10; i++) {
      if (arr[i] !== 0) {
        answer = arr.slice(i).join("");
        break;
      }
    }

    console.log(answer);
    process.exit(0);
  }

  if (index === 10) {
    N--;
    return;
  }

  for (let value = 0; value < limit; value++) {
    arr[index] = value;

    if (value === 0 && limit === 10) {
      findAnswer(index + 1, 10);
    } else {
      findAnswer(index + 1, value);
    }
  }
};

findAnswer(0, 10);

console.log(-1);
