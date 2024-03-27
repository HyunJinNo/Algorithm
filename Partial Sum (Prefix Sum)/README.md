# Partial Sum

<br>

## Introduction
- **Definition**
  - **부분 합(Partial Sum) 또는 누적 합(Prefix Sum)** 이란 배열의 각 위치에 대해 배열의 시작부터 현재 위치까지의 원소의 합을 구하는 것을 말한다.
  - 배열 scores[]에 대해 부분 합 psum[]의 각 원소를 다음과 같이 정의할 수 있다.
    <table>
      <tr>
        <th>i</th>
        <th>0</th>
        <th>1</th>
        <th>2</th>
        <th>3</th>
        <th>4</th>
        <th>5</th>
        <th>6</th>
        <th>7</th>
        <th>8</th>
      </tr>
      <tr>
        <td>scores</td>
        <td>100</td>
        <td>97</td>
        <td>86</td>
        <td>79</td>
        <td>66</td>
        <td>52</td>
        <td>49</td>
        <td>42</td>
        <td>31</td>
      </tr>
      <tr>
        <td>psum</td>
        <td>100</td>
        <td>197</td>
        <td>283</td>
        <td>362</td>
        <td>428</td>
        <td>480</td>
        <td>529</td>
        <td>571</td>
        <td>602</td>
      </tr>
    </table>
- **Time Complexity**
  - psum을 미리 계산해 두면 scores[]의 특정 구간의 합을 <b>O(1)</b>에 구할 수 있다. <b>scores[a]부터 scores[b]까지의 합</b>은 <ins><b>psum[b] - psum[a - 1]</b></ins>으로 계산할 수 있다.

<br>

## How to Use
- <b>부분 합 계산하기</b>
  ```Java
  // psum 계산하기

  int[] scores = new int { 10, 20, 30, 40, 50 };
  int[] psum = new int[5];
  psum[0] = scores[0];

  for (int i = 1; i < psum.length; i++) {
      psum[i] += psum[i - 1] + scores[i];
  }
  ```
  ```Java
  // scores[a]부터 scores[b]까지의 합 구하기

  /**
   * scores[a]부터 scores[b]까지의 합을 계산한다.
   * @param psum 부분 합 배열
   * @param a 시작 Index
   * @param b 끝 Index
   * @return 누적 합
   */
  public int rangeSum(int[] psum, int a, int b) {
      if (a == 0) {
          return psum[b];          
      } else {
          return psum[b] - psum[a - 1];
      }
  }
  ```
- <b>부분 합으로 분산 계산하기</b>
  ```Java
  // 특정 구간의 분산(Variance) 계산하기

  /**
   * scores[a]에서 scores[b]까지의 분산을 계산한다.
   * @param sqpsum 제곱의 부분 합 배열
   * @param psum 부분 합 배열
   * @param a 시작 Index
   * @param b 끝 Index
   * @return 분산 값
   */
  double variance(int[] sqpsum, int[] psum, int a, int b) {
      double mean = rangeSum(psum, a, b) / ((double) (b - a + 1)); // 구간의 평균 값 계산
      double result = rangeSum(sqpsum, a, b) - 2 * mean * rangeSum(psum, a, b) + (b - a + 1) * mean * mean;
      return result / (b - a + 1);
  }
  ```
- <b>2차원 배열에서의 부분 합</b>
  ```Java
  /**
   * 부분 합 psum[][]이 주어질 때, scores[row1][col1]과 scores[row2][col2]를 
   * 양 끝으로 갖는 부분 배열의 합을 반환한다.
   */
  public int gridSum(int[][] psum, int row1, int col1, int row2, int col2) {
      int result = psum[row2][col2];
      if (row1 > 0) {
        result -= psum[row1 - 1][col2];
      }
      if (col1 > 0) {
        result -= psum[row2][col1 - 1];
      }
      if (row1 > 0 && col1 > 0) {
        result += psum[row1 - 1][col1 - 1];
      }
      return result;
  }
  ```
<br>

## Examples
- ?