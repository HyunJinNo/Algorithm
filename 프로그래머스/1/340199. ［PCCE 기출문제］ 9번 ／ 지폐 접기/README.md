# [level 1] [PCCE 기출문제] 9번 / 지폐 접기 - 340199 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/340199?language=java) 

### 성능 요약

메모리: 76.6 MB, 시간: 0.05 ms

### 구분

코딩테스트 연습 > PCCE 기출문제

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 04월 24일 10:06:46

### 문제 설명

<p>민수는 다양한 지폐를 수집하는 취미를 가지고 있습니다. 지폐마다 크기가 달라 지갑에 넣으려면 여러 번 접어서 넣어야 합니다. 예를 들어 지갑의 크기가 30 * 15이고 지폐의 크기가 26 * 17이라면 한번 반으로 접어 13 * 17 크기로 만든 뒤 90도 돌려서 지갑에 넣을 수 있습니다. 지폐를 접을 때는 다음과 같은 규칙을 지킵니다.</p>

<ul>
<li>지폐를 접을 때는 항상 길이가 긴 쪽을 반으로 접습니다.</li>
<li>접기 전 길이가 홀수였다면 접은 후 소수점 이하는 버립니다.</li>
<li>접힌 지폐를 그대로 또는 90도 돌려서 지갑에 넣을 수 있다면 그만 접습니다.</li>
</ul>

<p>지갑의 가로, 세로 크기를 담은 정수 리스트 <code>wallet</code>과 지폐의 가로, 세로 크기를 담은 정수 리스트 <code>bill</code>가 주어질 때, 지갑에 넣기 위해서 지폐를 최소 몇 번 접어야 하는지 return하도록 solution함수를 완성해 주세요.</p>

<p>지폐를 지갑에 넣기 위해 접어야 하는 최소 횟수를 구하는 과정은 다음과 같습니다.</p>
<div class="highlight"><pre class="codehilite"><code>1. 지폐를 접은 횟수를 저장할 정수 변수 answer를 만들고 0을 저장합니다.
2. 반복문을 이용해 bill의 작은 값이 wallet의 작은 값 보다 크거나 bill의 큰 값이 wallet의 큰 값 보다 큰 동안 아래 과정을 반복합니다.
    2-1. bill[0]이 bill[1]보다 크다면
        bill[0]을 2로 나누고 나머지는 버립니다.
    2-2. 그렇지 않다면
        bill[1]을 2로 나누고 나머지는 버립니다.
    2-3. answer을 1 증가시킵니다.
3. answer을 return합니다.
</code></pre></div>
<ul>
<li>위의 의사코드와 작동방식이 다른 코드를 작성해도 상관없습니다.</li>
</ul>

<hr>

<h4>제한사항</h4>

<ul>
<li><code>wallet</code>의 길이 = <code>bill</code>의 길이 = 2</li>
<li>10 ≤ <code>wallet[0]</code>, <code>wallet[1]</code> ≤ 100</li>
<li>10 ≤ <code>bill[0]</code>, <code>bill[1]</code> ≤ 2,000</li>
</ul>

<hr>

<h4>입출력 예</h4>
<table class="table">
        <thead><tr>
<th>wallet</th>
<th>bill</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[30, 15]</td>
<td>[26, 17]</td>
<td>1</td>
</tr>
<tr>
<td>[50, 50]</td>
<td>[100, 241]</td>
<td>4</td>
</tr>
</tbody>
      </table>
<hr>

<h4>입출력 예 설명</h4>

<p>입출력 예 #1</p>

<ul>
<li>지문과 동일합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>지폐를 접으면 다음과 같이 크기가 줄어듭니다. 따라서 4번 접으면 지갑에 넣을 수 있습니다.</li>
<li>[100, 241] -&gt; [100, 120] -&gt; [100, 60] -&gt; [50, 60] -&gt; [50, 30]</li>
</ul>

<hr>

<ul>
<li>cpp를 응시하는 경우 리스트는 배열과 동일한 의미이니 풀이에 참고해주세요.

<ul>
<li>ex) 번호가 담긴 정수 <u><strong>리스트</strong></u> <code>numbers</code>가 주어집니다. =&gt; 번호가 담긴 정수 <u><strong>배열</strong></u> <code>numbers</code>가 주어집니다.</li>
</ul></li>
<li>java를 응시하는 경우 리스트는 배열, 함수는 메소드와 동일한 의미이니 풀이에 참고해주세요.

<ul>
<li>ex) solution <u><strong>함수</strong></u>가 올바르게 작동하도록 한 줄을 수정해 주세요. =&gt; solution <u><strong>메소드</strong></u>가 올바르게 작동하도록 한 줄을 수정해 주세요.</li>
</ul></li>
</ul>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges