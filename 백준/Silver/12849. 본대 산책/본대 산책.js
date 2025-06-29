const path = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
const input = require("fs").readFileSync(path, "utf-8").toString();
const D = Number(input); // 1 <= D <= 100_000
const cache = Array.from({ length: D + 1 }, () => Array(8).fill(0));

const findAnswer = (time, pos) => {
  if (time === D) {
    return pos === 0 ? 1 : 0;
  } else if (cache[time][pos] !== 0) {
    return cache[time][pos];
  }

  let result = 0;

  switch (pos) {
    case 0: // 정보과학관
      result = findAnswer(time + 1, 1) + findAnswer(time + 1, 3);
      break;
    case 1: // 전산관
      result =
        findAnswer(time + 1, 0) +
        findAnswer(time + 1, 2) +
        findAnswer(time + 1, 3);
      break;
    case 2: // 신양관
      result =
        findAnswer(time + 1, 1) +
        findAnswer(time + 1, 3) +
        findAnswer(time + 1, 4) +
        findAnswer(time + 1, 5);
      break;
    case 3: // 미래관
      result =
        findAnswer(time + 1, 0) +
        findAnswer(time + 1, 1) +
        findAnswer(time + 1, 2) +
        findAnswer(time + 1, 5);
      break;
    case 4: // 진리관
      result =
        findAnswer(time + 1, 2) +
        findAnswer(time + 1, 5) +
        findAnswer(time + 1, 6);
      break;
    case 5: // 한경직기념관
      result =
        findAnswer(time + 1, 2) +
        findAnswer(time + 1, 3) +
        findAnswer(time + 1, 4) +
        findAnswer(time + 1, 7);
      break;
    case 6: // 학생회관
      result = findAnswer(time + 1, 4) + findAnswer(time + 1, 7);
      break;
    case 7: // 형남공학관
      result = findAnswer(time + 1, 5) + findAnswer(time + 1, 6);
      break;
    default:
      break;
  }

  cache[time][pos] = result % 1_000_000_007;
  return cache[time][pos];
};

console.log(findAnswer(0, 0));