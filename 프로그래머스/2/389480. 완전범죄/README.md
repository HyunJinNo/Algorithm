# [level 2] 완전범죄 - 389480 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/389480) 

### 성능 요약

메모리: 38.1 MB, 시간: 6.51 ms

### 구분

코딩테스트 연습 > 2025 프로그래머스 코드챌린지 2차 예선

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 05월 01일 10:47:51

### 문제 설명

<p>A도둑과 B도둑이 팀을 이루어 모든 물건을 훔치려고 합니다. 단, 각 도둑이 물건을 훔칠 때 남기는 흔적이 누적되면 경찰에 붙잡히기 때문에, 두 도둑 중 누구도 경찰에 붙잡히지 않도록 흔적을 최소화해야 합니다.</p>

<p>물건을 훔칠 때 조건은 아래와 같습니다.</p>

<ul>
<li>물건 i를 훔칠 때,

<ul>
<li>A도둑이 훔치면 <code>info[i][0]</code>개의 A에 대한 흔적을 남깁니다.</li>
<li>B도둑이 훔치면 <code>info[i][1]</code>개의 B에 대한 흔적을 남깁니다.</li>
</ul></li>
<li>각 물건에 대해 A도둑과 B도둑이 남기는 흔적의 개수는 1 이상 3 이하입니다.</li>
</ul>

<p>경찰에 붙잡히는 조건은 아래와 같습니다.</p>

<ul>
<li>A도둑은 자신이 남긴 흔적의 누적 개수가 <code>n</code>개 이상이면 경찰에 붙잡힙니다.</li>
<li>B도둑은 자신이 남긴 흔적의 누적 개수가 <code>m</code>개 이상이면 경찰에 붙잡힙니다.</li>
</ul>

<p>각 물건을 훔칠 때 생기는 흔적에 대한 정보를 담은 2차원 정수 배열 <code>info</code>, A도둑이 경찰에 붙잡히는 최소 흔적 개수를 나타내는 정수 <code>n</code>, B도둑이 경찰에 붙잡히는 최소 흔적 개수를 나타내는 정수 <code>m</code>이 매개변수로 주어집니다. 두 도둑 모두 경찰에 붙잡히지 않도록 모든 물건을 훔쳤을 때, <strong>A도둑이 남긴 흔적의 누적 개수의 최솟값</strong>을 return 하도록 solution 함수를 완성해 주세요. 만약 어떠한 방법으로도 두 도둑 모두 경찰에 붙잡히지 않게 할 수 없다면 -1을 return해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>1 ≤ <code>info</code>의 길이 ≤ 40

<ul>
<li><code>info[i]</code>는 물건 <code>i</code>를 훔칠 때 생기는 흔적의 개수를 나타내며, [<code>A에 대한 흔적 개수</code>, <code>B에 대한 흔적 개수</code>]의 형태입니다.</li>
<li>1 ≤ <code>흔적 개수</code> ≤ 3</li>
</ul></li>
<li>1 ≤ <code>n</code> ≤ 120</li>
<li>1 ≤ <code>m</code> ≤ 120</li>
</ul>

<hr>

<h5>테스트 케이스 구성 안내</h5>

<p>아래는 테스트 케이스 구성을 나타냅니다. 각 그룹 내의 테스트 케이스를 모두 통과하면 해당 그룹에 할당된 점수를 획득할 수 있습니다.</p>
<table class="table">
        <thead><tr>
<th>그룹</th>
<th>총점</th>
<th>테스트 케이스 그룹 설명</th>
</tr>
</thead>
        <tbody><tr>
<td>#1</td>
<td>15%</td>
<td><code>info[i][1]</code> = 1</td>
</tr>
<tr>
<td>#2</td>
<td>40%</td>
<td><code>info</code>의 길이 ≤ 20</td>
</tr>
<tr>
<td>#3</td>
<td>45%</td>
<td>추가 제한 사항 없음</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>info</th>
<th>n</th>
<th>m</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>[[1, 2], [2, 3], [2, 1]]</td>
<td>4</td>
<td>4</td>
<td>2</td>
</tr>
<tr>
<td>[[1, 2], [2, 3], [2, 1]]</td>
<td>1</td>
<td>7</td>
<td>0</td>
</tr>
<tr>
<td>[[3, 3], [3, 3]]</td>
<td>7</td>
<td>1</td>
<td>6</td>
</tr>
<tr>
<td>[[3, 3], [3, 3]]</td>
<td>6</td>
<td>1</td>
<td>-1</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<p>첫 번째와 세 번째 물건을 B도둑이 훔치고 두 번째 물건을 A도둑이 훔치면, A도둑에 대한 흔적은 총 2개이고 B도둑에 대한 흔적은 총 3개입니다. 목표를 달성하면서 A도둑에 대한 흔적 개수를 2보다 더 낮게 만들 수 없습니다.<br>
따라서 2를 return 해야 합니다.</p>

<p><strong>입출력 예 #2</strong></p>

<p>B도둑이 모든 물건을 훔쳐도 B의 흔적이 7개 이상 쌓이지 않습니다.<br>
따라서 A도둑의 흔적은 최소 0이 되며, 0을 return 해야 합니다.</p>

<p><strong>입출력 예 #3</strong></p>

<p>B도둑이 한 번이라도 물건을 훔치면 B의 흔적이 최소 1개 이상 남습니다. 따라서 모든 물건을 A도둑이 훔쳐야 하며, 이 경우에도 A의 흔적은 7개 미만입니다.<br>
따라서, A도둑이 모든 물건을 훔칠 때의 흔적 개수 6을 return 해야 합니다.</p>

<p><strong>입출력 예 #4</strong></p>

<p>어떤 방법으로도 두 도둑 모두 경찰에 붙잡히지 않고 모든 물건을 훔칠 수 없습니다.<br>
따라서 -1을 return 해야 합니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges