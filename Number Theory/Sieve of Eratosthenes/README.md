# 에라토스테네스의 체(Sieve of Eratosthenes)

<br>

## Introduction
- **Definition**
  - **에라토스테네스의 체(Sieve of Eratosthenes)** 는 주어진 수 n 이하의 모든 소수를 찾아내는데 자주 사용되는 방법이다.
 
<br>

## How to Use
1. 먼저 2부터 n까지의 수를 전부 한 목록에 쓴다.
2. 그 다음에 이 목록에서 지워지지 않은 수들을 순회하며 각 수의 배수를 지우는 과정을 반복한다. 이 때 지워지지 않은 수를 찾을 때 n이 아니라 sqrt(n)까지만 찾는다.
3. i의 배수들을 모두 지울 때 2 x i 에서 시작하는 것이 아니라 i x i 부터 시작하면 계산하는데 시간을 단축할 수 있다.
4. 이와 같은 과정을 반복하고 나면 결과적으로 남은 수들은 모두 소수가 된다.

<br>

## Examples
- [소수 구하기.kt](https://github.com/HyunJinNo/Algorithm/blob/main/%EB%B0%B1%EC%A4%80/Silver%20III/1929.%E2%80%85%EC%86%8C%EC%88%98%E2%80%85%EA%B5%AC%ED%95%98%EA%B8%B0/%EC%86%8C%EC%88%98%E2%80%85%EA%B5%AC%ED%95%98%EA%B8%B0.kt)
