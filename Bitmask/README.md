# Bitmask

<br>

## Introduction
- **Definition**
  - **비트마스크(Bitmask)** 란 정수의 이진수 표현을 자료 구조로 쓰는 기법을 말한다.
  - **비트(Bit)**: 이진수의 한 자리를 비트(Bit)라고 한다.  
  - **최상위 비트(Most Significant Bit)**: 2<sup>N - 1</sup>에 해당하는 비트를 말한다.  
  - **최하위 비트(Least Significant Bit)**: 2<sup>0</sup>에 해당하는 비트를 말한다.
- **Advantages**
  - **더 빠른 수행 시간**: 비트마스크 연산은 **O(1)** 에 구현되는 것이 많으므로, 적절히 사용할 경우 다른 자료 구조를 사용하는 것보다 훨씬 빠르게 동작한다.
  - **더 간결한 코드**: 다양한 집합 연산들을 반복문 없이 한 줄에 작성이 가능하다.
  - **더 작은 메모리 사용량**: 비트마스크를 이용하는 코드들은 같은 데이터를 더 적은 메모리를 사용해 표현할 수 있다.
  - **연관 배열을 배열로 대체**: Boolean 값 배열을 키로 갖는 연관 배열 객체 Map<Boolean[], Integer>을 비트마스크를 이용하여 int[] 배열로 대체할 수 있다. 이를 통해 시간과 메모리를 절약할 수 있다.

<br>

## How to Use
- **비트 연산자**
  <table>
    <tr>
      <th>연산
      <th>코드
    </tr>
    <tr>
      <td>AND 연산</td>
      <td>a % b</td>
    </tr>
    <tr>
      <td>OR 연산</td>
      <td>a | b</td>
    </tr>
    <tr>
      <td>XOR 연산</td>
      <td>a ^ b</td>
    </tr>
    <tr>
      <td>NOT 연산</td>
      <td>~a</td>
    </tr>
    <tr>
      <td>Left Shift 연산</td>
      <td>a << b</td>
    </tr>
    <tr>
      <td>Right Shift 연산</td>
      <td>a >> b</td>
    </tr>
  </table>
- **비트마스크를 이용한 집합 구현**
  - **꽉 찬 집합**
    ```Java
    int fullSet = (1 << 20) - 1;
    ```
  - **공집합**
    ```Java
    int emptySet = 0;
    ```
  - **원소 추가**
    ```Java
    bitSet |= (1 << p);
    ```
  - **원소의 포함 여부 확인**   
    ```Java
    // & 연산의 결과 값이 0 또는 (1 << p) 라는 점을 주의하자.
    if (bitSet & (1 << p)) {
      System.out.println("원소가 포함되어 있음.");
    }
    ```
  - **원소의 삭제**
    ```Java
    bitSet &= ~(1 << p);
    ```
  - **원소의 토글**
    ```Java
    bitSet ^= (1 << p);
    ```
  - **두 집합에 대한 연산**
    ```Java
    int added = (a | b); // a와 b의 합집합
    int intersection = (a & b); // a와 b의 교집합
    int removed = (a & ~b); // a에서 b를 뺀 차집합
    int toggled = (a ^ b); // a와 b중 하나에만 포함된 원소들의 집합
    ```
  - **집합의 크기**
    ```Java
    int bitCount(int x) {
      if (x == 0) return 0;
      return x % 2 + bitCount(x / 2);
    }
    ```
    <table>
      <tr>
        <th>컴파일러 혹은 언어</th>
        <th>집합의 크기</th>
      </tr>
      <tr>
        <td>gcc/g++</td>
        <td>__builtin_popcount(bitSet)</td>
      </tr>
      <tr>
        <td>Visual C++</td>
        <td>__popcnt(bitSet)</td>
      </tr>
      <tr>
        <td>Java</td>
        <td>Integer.bitCount(bitSet)</td>
      </tr>
    </table>
  - **최소 원소 찾기**
    ```Java
    int firstElement = (bitSet & -bitSet);
    ```
    <table>
      <tr>
        <th>컴파일러 혹은 언어</th>
        <th>최소 원소</th>
      </tr>
      <tr>
        <td>gcc/g++</td>
        <td>__builtin_ctz(bitSet)</td>
      </tr>
      <tr>
        <td>Visual C++</td>
        <td>__BitScanForward(bitSet)</td>
      </tr>
      <tr>
        <td>Java</td>
        <td>Integer.numberOfTrailingZeros(bitSet)</td>
      </tr>
    </table>
  - **최소 원소 지우기**
    ```Java
    bitSet &= (bitSet - 1);
    ```
  - **2의 거듭제곱 값인지 여부 확인**
    ```Java
    // 2의 거듭제곱 값들의 이진수 표현에는 켜진 비트가 하나 밖에 없음.
    if ((num & (num - 1)) == 0) {
      System.out.println("2의 거듭제곱 값입니다.");
    }
    ```
  - **모든 부분 집합 순회**
    ```Java
    for (int subset = bitSet; subset > 0; subset = ((subset - 1) & bitSet)) {
      // subset은 bitSet의 부분 집합
      // (subset > 0): 공집합은 방문하지 않는다.
    }
    ```
<br>

## Examples
- [비트마스크를 사용하는 에라토스테네스의 체](https://github.com/HyunJinNo/Algorithm/blob/main/Number%20Theory/Sieve%20of%20Eratosthenes/Sieve_of_Eratosthenes.js)
