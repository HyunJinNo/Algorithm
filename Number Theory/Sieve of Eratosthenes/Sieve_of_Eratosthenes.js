// 비트마스크(Bitmask)를 사용하는 에라토스테네스의 체의 구현

const n = 1000000; // n개의 원소

/**
 * Uint8Array와 비트마스크를 사용하여 메모리 사용량을 8분의 1로 줄인다.
 * 0: 합성수, 1: 소수
 */
const sieve = new Uint8Array(Math.floor((n + 7) / 8)).fill(255);

/**
 * 비트를 0으로 바꿔서 x가 소수가 아니라고 표시한다.
 * @param {number} x 
 */
const setComposite = (x) => {
  sieve[x >> 3] &= ~(1 << (x & 7));
}

/**
 * x가 소수인지 확인한다
 * @param {number} x 판정할 값
 * @returns {Boolean} 소수 여부
 */
const isPrime = (x) => {
  if (sieve[x >> 3] & (1 << (x & 7))) {
    return true;
  } else {
    return false;
  }
}

setComposite(0);
setComposite(1);
for (let x = 2; x <= n; x++) {
  if (isPrime(x)) {
    for (let y = x * x; y <= n; y += x) {
      setComposite(y);
    }
  }
}

for (let x = 2; x <= n; x++) {
  if (isPrime(x)) {
    console.log(x);
  }
}
