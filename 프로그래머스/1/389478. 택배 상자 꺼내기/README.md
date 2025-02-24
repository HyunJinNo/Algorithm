# [level 1] 택배 상자 꺼내기 - 389478 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/389478) 

### 성능 요약

메모리: 33.5 MB, 시간: 0.37 ms

### 구분

코딩테스트 연습 > 2025 프로그래머스 코드챌린지 2차 예선

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 02월 24일 09:51:17

### 문제 설명

<p>1 ~ <code>n</code>의 번호가 있는 택배 상자가 창고에 있습니다. 당신은 택배 상자들을 다음과 같이 정리했습니다.</p>

<p>왼쪽에서 오른쪽으로 가면서 1번 상자부터 번호 순서대로 택배 상자를 한 개씩 놓습니다. 가로로 택배 상자를 <code>w</code>개 놓았다면 이번에는 오른쪽에서 왼쪽으로 가면서 그 위층에 택배 상자를 한 개씩 놓습니다. 그 층에 상자를 <code>w</code>개 놓아 가장 왼쪽으로 돌아왔다면 또다시 왼쪽에서 오른쪽으로 가면서 그 위층에 상자를 놓습니다. 이러한 방식으로 <code>n</code>개의 택배 상자를 모두 놓을 때까지 한 층에 <code>w</code>개씩 상자를 쌓습니다.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/e06b4c0d-0ce6-4a2d-8ad4-ba20f9398145/ex1-1.png" title="" alt="ex1-1.png"></p>

<ul>
<li>위 그림은 <code>w</code> = 6일 때 택배 상자 22개를 쌓은 예시입니다.</li>
</ul>

<p>다음 날 손님은 자신의 택배를 찾으러 창고에 왔습니다. 당신은 손님이 자신의 택배 상자 번호를 말하면 해당 택배 상자를 꺼내줍니다. 택배 상자 A를 꺼내려면 먼저 A 위에 있는 다른 모든 상자를 꺼내야 A를 꺼낼 수 있습니다. 예를 들어, 위 그림에서 8번 상자를 꺼내려면 먼저 20번, 17번 상자를 꺼내야 합니다.</p>

<p>당신은 꺼내려는 상자 번호가 주어졌을 때, 꺼내려는 상자를 포함해 총 몇 개의 택배 상자를 꺼내야 하는지 알고 싶습니다.</p>

<p>창고에 있는 택배 상자의 개수를 나타내는 정수 <code>n</code>, 가로로 놓는 상자의 개수를 나타내는 정수 <code>w</code>와 꺼내려는 택배 상자의 번호를 나타내는 정수 <code>num</code>이 매개변수로 주어집니다. 이때, 꺼내야 하는 상자의 총개수를 return 하도록 solution 함수를 완성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>2 ≤ <code>n</code> ≤ 100</li>
<li>1 ≤ <code>w</code> ≤ 10</li>
<li>1 ≤ <code>num</code> ≤ <code>n</code></li>
</ul>

<hr>

<h5>테스트 케이스 구성 안내</h5>

<p>아래는 테스트 케이스 구성을 나타냅니다. 각 그룹 내의 테스트 케이스를 모두 통과하면 해당 그룹에 할당된 점수를 획득할 수 있습니다.</p>
<table class="table">
        <thead><tr>
<th>그룹</th>
<th>총점</th>
<th>추가 제한 사항</th>
</tr>
</thead>
        <tbody><tr>
<td>#1</td>
<td>10%</td>
<td><code>w</code> = 1</td>
</tr>
<tr>
<td>#2</td>
<td>20%</td>
<td><code>n</code>은 <code>w</code>의 배수입니다.</td>
</tr>
<tr>
<td>#3</td>
<td>70%</td>
<td>추가 제한 사항 없음</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>n</th>
<th>w</th>
<th>num</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>22</td>
<td>6</td>
<td>8</td>
<td>3</td>
</tr>
<tr>
<td>13</td>
<td>3</td>
<td>6</td>
<td>4</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<p>문제 예시와 같습니다. 꺼내야 하는 상자의 총개수는 8번 상자를 포함해 3개입니다.</p>

<p><strong>입출력 예 #2</strong></p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/cb4cf30d-2313-40ff-8366-86841f603ae6/ex2-1.png" title="" alt="ex2-1.png"></p>

<p>6번 상자를 꺼내려면 먼저 13, 12, 7번 상자를 꺼내야 합니다.<br>
따라서 4를 return 합니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges