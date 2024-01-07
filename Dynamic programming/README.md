# Dynamic programming

<br>

## Introduction
- **Definition**
  - **동적 계획법(Dynamic programming)** 은 처음 주어진 문제를 더 작은 문제들로 나눈 뒤 각 조각의 답을 계산하고, 이 답들로부터 원래 문제에 대한 답을 계산해낸다. 이는 **분할 정복**과 같은 접근 방식이다.
  - **중복되는 부분 문제**
    - 동적 계획법에서 어떤 **부분 문제(Overlapping subproblems)** 는 두 개 이상의 문제를 푸는데 사용될 수 있다. 즉, 계산 결과를 재활용한다.
    - 이미 계산한 값을 저장해두는 메모리 장소를 **캐시(Cache)** 라고 한다.
    - 두 번 이상 계산되는 부분 문제를 **중복되는 부분 문제(Overlapping subproblems)** 라고 한다.
  - **메모이제이션(Memoization)**
    - **메모이제이션(Memoization)** 이란 함수의 결과를 저장하는 장소를 마련해 두고, 한 번 계산한 값을 저장해 두었다가 재활용하는 최적화 기법을 말한다.
    - 메모이제이션은 **참조적 투명 함수(Referential transparent function)** 의 경우에만 적용할 수 있다.
      > **참조적 투명성(Referential transparency)**: 함수의 반환 값이 입력 값만으로 결정되는지의 여부를 말한다.  
      > **참조적 투명 함수(Referential transparent function)**: 입력이 고정되어 있을 때 그 결과가 항상 같은 함수들을 말한다.
- **Time Complexity**
  - 동적 계획법의 시간 복잡도는 다음 식을 계산하여 간단하게 계산할 수 있다. 단, 아래 식은 수행 시간의 상한을 간단히 계산할 수 있는 방법일 뿐이며, 항상 정확하지는 않는다는 점을 주의할 것.
    - **(존재하는 부분 문제의 수) X (한 부분 문제를 풀 때 필요한 반복문의 수행 횟수)**

<br>

## How to Use
1. 메모이제이션을 활용한 함수를 구현할 때 항상 **기저 사례(Base case)** 부터 제일 먼저 처리한다. 입력이 범위를 벗어난 경우 등을 기저 사례로 처리하면 된다.
2. 주어진 문제를 완전 탐색을 이용해 해결한다.
3. 중복된 부분 문제를 한 번만 계산하도록 메모이제이션을 적용한다.

<br>

## Examples
- [JUMPGAME](https://github.com/HyunJinNo/Algorithm/blob/main/Dynamic%20programming/JUMPGAME.md)
- [WILDCARD](https://github.com/HyunJinNo/Algorithm/blob/main/Dynamic%20programming/WILDCARD.md)
