const path = (process.platform === "linux") ? "/dev/stdin" : "./JavaScript/input.txt";
const input = require('fs').readFileSync(path).toString().split("\n");
const c = Number(input.shift()); // 테스트 케이스의 수, 1 <= c <= 50

/**
 * 앞으로 다녀야 하는 최소 학기의 수를 계산하는 함수.
 * @param {number} semester 현재 학기
 * @param {number} taken 지금까지 들은 과목의 집합
 * @return {number} 앞으로 다녀야 하는 최소 학기의 수
 */
const graduate = (semester, taken) => {
  if (bitCount(taken) >= k) {
    return 0;
  } else if (semester >= m) {
    return Infinity;
  } else if (cache[semester][taken] !== -1) {
    return cache[semester][taken];
  }

  let result = Infinity;
  let canTake = (classes[semester] & (~taken)); // 이번 학기에 들을 수 있는 과목 중 아직 듣지 않은 과목들

  // 선수 과목을 다 듣지 않은 과목들을 걸러낸다.
  for (let i = 0; i < n; i++) {
    if ((canTake & (1 << i)) && ((taken & prerequisites[i]) !== prerequisites[i])) {
      canTake &= ~(1 << i);
    }
  }

  // 들을 수 있는 과목들의 부분 집합을 순회한다.
  for (let take = canTake; take > 0; take = ((take - 1) & canTake)) {
    if (bitCount(take) > l) {
      continue;
    }
    result = Math.min(result, graduate(semester + 1, taken | take) + 1);
  }

  // 이번 학기에 아무 것도 듣지 않는 경우
  result = Math.min(result, graduate(semester + 1, taken));
  cache[semester][taken] = result;
  return result;
}

const bitCount = (x) => {
  if (x === 0) {
    return 0;
  } else {
    return x % 2 + bitCount(Math.floor(x / 2));
  }
}

let cache, n, k, m, l;
let prerequisites;
let classes;

for (let i = 0; i < c; i++) {
  cache = Array.from(Array(10), () => new Array(1 << 12).fill(-1));

  // n: 전공 과목의 수, 1 <= n <= 12
  // k: 들어야 할 과목의 수, 0 <= k <= n
  // m: 학기의 수, 1 <= m <= 10
  // l: 한 학기에 최대로 들을 수 있는 과목의 수
  [n, k, m, l] = input.shift().trim().split(" ").map(Number);

  // i번째 과목의 선수 과목의 집합
  prerequisites = [];
  for (let j = 0; j < n; j++) {
    const temp = input.shift().trim().split(" ").map(Number);
    const num = temp[0];
    let prerequisite = 0;
    for (let k = 1; k <= num; k++) {
      prerequisite |= (1 << temp[k]);
    }
    prerequisites.push(prerequisite);
  }

  // i번째 학기에 개설되는 과목의 집합
  classes = [];
  for (let j = 0; j < m; j++) {
    const temp = input.shift().trim().split(" ").map(Number);
    const num = temp[0];
    let _class = 0;
    for (let k = 1; k <= num; k++) {
      _class |= (1 << temp[k]);
    }
    classes.push(_class);
  }

  const result = graduate(0, 0);
  console.log(`${result === Infinity ? "IMPOSSIBLE" : result}`);
}
