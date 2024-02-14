# Divide-and-conquer

<br>

## Introduction
- **Definition**
  - **분할 정복(Divide & Conquer)** 은 가장 유명한 알고리즘 디자인 패러다임으로, 분할 정복 알고리즘들은 주어진 문제를 둘 이상의 부분 문제로 나눈 뒤 각 문제에 대한 답을 **재귀 호출**을 이용해 계산하고, 각 부분 문제의 답으로부터 전체 문제의 답을 계산해낸다.
  - 일반적인 재귀 호출이 문제를 한 조각과 나머지 전체로 나누는 것과 달리, **분할 정복은 문제를 거의 같은 크기의 부분 문제로 나눈다**.
  - 분할 정복을 사용하는 알고리즘들은 대개 다음과 같은 3가지 구성 요소를 지닌다.
    1. 문제를 더 작은 문제로 분할하는 과정(Divide)
    2. 각 문제에 대해 구한 답을 원래 문제에 대한 답으로 병합하는 과정(Merge)
    3. 더 이상 답을 분할하지 않고 곧장 풀 수 있는 매우 작은 문제(Base case)
  - 분할 정복은 많은 경우 **같은 작업을 더 빠르게 처리**해준다는 장점이 있다.
- **Time complexity**
  - 분할 정복의 시간 복잡도는 분할 과정 및 병합 과정에 영향을 받는다.
  - 같은 문제라도 어떻게 분할하느냐에 따라 시간 복잡도 차이가 커진다.
  - 문제를 분할하였을 때 여러 번 중복되어 계산되는 문제가 있다면 해당 부분에서 알고리즘의 효율성이 떨어지게 된다.

<br>

## How to Use
1. 문제를 더 작은 문제로 분할한다.
2. 각 문제에 대한 답을 재귀 호출을 통해 계산한다.
3. 각 문제에 대해 계산한 답을 원래 문제에 대한 답으로 병합한다.

<br>

## Examples
- [QUADTREE](https://github.com/HyunJinNo/Algorithm/blob/main/Divide-and-conquer/QUADTREE.java)
- [FENCE](https://github.com/HyunJinNo/Algorithm/blob/main/Divide-and-conquer/FENCE.java)
