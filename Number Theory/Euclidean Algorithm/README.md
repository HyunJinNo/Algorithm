# 유클리드 알고리즘(Euclidean Algorithm)

<br>

## Introduction
- **Definition**
  - **유클리드 알고리즘(Euclidean Algorithm))** 은 두 수의 최대공약수를 구하는데 사용되는 방법이다.
  - 유클리드 알고리즘은 두 수 a, b(a > b)의 공약수의 집합은 (a - b)와 b의 공약수 집합과 같다는 점을 이용한다. 즉, a, b의 최대공약수 gcd(a, b)는 항상 (a - b)와 b의 최대공약수 gcd(a - b, b)와 같다.
 
<br>

## How to Use
```Java
// Java
int gcd(int a, int b) { // a > b
    if (b == 0) {
        return a;
    } else {
        return gcd(b, a % b);
    }
}
```
```Kotlin
// Kotlin
// a > b
fun gcd(a: Int, b: Int): Int = if (b == 0) a else gcd(b, a % b)
```

<br>

## Examples
- ?
