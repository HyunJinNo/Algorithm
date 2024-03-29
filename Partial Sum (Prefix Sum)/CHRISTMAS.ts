const path: string = (process.platform === "linux") ? "/dev/stdin" : "./TypeScript/src/input.txt";
const input: Array<string> = require("fs").readFileSync(path).toString().split("\n");
const c = Number(input[0]); // 테스트 케이스의 개수, 1 <= c <= 60

/**
 * 몇 가지 방법으로 구매할 수 있는지 계산하는 함수
 * @param psum 부분 합 배열
 * @param k 어린이의 수
 * @returns 구매할 수 있는 방법의 수
 */
const waysToBuy = (psum: Array<number>, k: number): number => {
  const MOD = 20091101;
  let result = 0;
  const count = Array(k).fill(0); // psum[]의 각 값을 몇 번이나 본 적 있는지 기록한다.
  for (let i = 0; i < psum.length; i++) {
    count[psum[i]]++;
  }

  // 두 번 이상 본 적 있다면 이 값 중 두 개를 선택하는 방법의 수를 더한다.
  for (let i = 0; i < k; i++) {
    if (count[i] >= 2) {
      result = (result + ((count[i] * (count[i] - 1)) / 2)) % MOD;
    }
  }

  return result;
}

const maxBuys = (psum: Array<number>, k: number): number => {
  const result = Array(psum.length).fill(0); // 첫 번째 상자부터 i번째 상자까지 고려했을 때 구매할 수 있는 최대 횟수
  const prev = Array(k).fill(-1); // psum[] 이 s 였던 마지막 위치

  for (let i = 0; i < psum.length; i++) {
    if (i > 0) {
      result[i] = result[i - 1];
    } else {
      result[i] = 0;
    }

    const loc = prev[psum[i]];
    if (loc !== -1) {
      result[i] = Math.max(result[i], result[loc] + 1);
    }
    prev[psum[i]] = i;
  }

  return result.pop();
}

for (let i = 1; i <= c; i++) {
  // n: 인형 상자의 개수, 1 <= n <= 100,000
  // k: 어린이의 수, 1 <= k <= 100,000
  const [n, k] = input[i * 2 - 1].split(" ").map(Number);
  const arr = input[i * 2].split(" ").map(Number);
  const psum = Array(n).fill(0);
  psum[0] = (arr[0] % k);
  for (let j = 1; j < n; j++) {
    psum[j] = (psum[j - 1] + arr[j]) % k;
  }
  psum.unshift(0);
  console.log(`${waysToBuy(psum, k)} ${maxBuys(psum, k)}`);
}
