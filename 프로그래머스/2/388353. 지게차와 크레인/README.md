# [level 2] 지게차와 크레인 - 388353 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/388353) 

### 성능 요약

메모리: 43.1 MB, 시간: 26.69 ms

### 구분

코딩테스트 연습 > 2025 프로그래머스 코드챌린지 1차 예선

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 04월 29일 11:16:17

### 문제 설명

<p>A 회사의 물류창고에는 알파벳 대문자로 종류를 구분하는 컨테이너가 세로로 <code>n</code> 줄, 가로로 <code>m</code>줄 총 <code>n</code> x <code>m</code>개 놓여 있습니다. 특정 종류 컨테이너의 출고 요청이 들어올 때마다 지게차로 창고에서 접근이 가능한 해당 종류의 컨테이너를 모두 꺼냅니다. 접근이 가능한 컨테이너란 4면 중 적어도 1면이 창고 외부와 연결된 컨테이너를 말합니다.</p>

<p>최근 이 물류 창고에서 창고 외부와 연결되지 않은 컨테이너도 꺼낼 수 있도록 크레인을 도입했습니다. 크레인을 사용하면 요청된 종류의 모든 컨테이너를 꺼냅니다.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/0e90cfc3-ddd7-4841-9ed8-c420cb6be7a5/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%85%E1%85%B2%E1%84%8E%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9-1-1.drawio.png" title="" alt="물류창고-1-1.drawio.png"></p>

<p>위 그림처럼 세로로 4줄, 가로로 5줄이 놓인 창고를 예로 들어보겠습니다. 이때 "A", "BB", "A" 순서대로 해당 종류의 컨테이너 출고 요청이 들어왔다고 가정하겠습니다. “A”처럼 알파벳 하나로만 출고 요청이 들어올 경우 지게차를 사용해 출고 요청이 들어온 순간 접근 가능한 컨테이너를 꺼냅니다. "BB"처럼 같은 알파벳이 두 번 반복된 경우는 크레인을 사용해 요청된 종류의 모든 컨테이너를 꺼냅니다.</p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/e5fac969-705a-41cf-8609-ad41e30ea694/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%85%E1%85%B2%E1%84%8E%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9-1-2.drawio.png" title="" alt="물류창고-1-2.drawio.png"></p>

<p>위 그림처럼 컨테이너가 꺼내져 3번의 출고 요청 이후 남은 컨테이너는 11개입니다. 두 번째 요청은 크레인을 활용해 모든 <code>B</code> 컨테이너를 꺼냈음을 유의해 주세요. 세 번째 요청이 들어왔을 때 2행 2열의 <code>A</code> 컨테이너만 접근이 가능하고 2행 3열의 <code>A</code> 컨테이너는 접근이 불가능했음을 유의해 주세요.</p>

<p>처음 물류창고에 놓인 컨테이너의 정보를 담은 1차원 문자열 배열 <code>storage</code>와 출고할 컨테이너의 종류와 출고방법을 요청 순서대로 담은 1차원 문자열 배열 <code>requests</code>가 매개변수로 주어집니다. 이때 모든 요청을 순서대로 완료한 후 남은 컨테이너의 수를 return 하도록 solution 함수를 완성해 주세요.</p>

<hr>

<h5>제한사항</h5>

<ul>
<li>2 ≤ <code>storage</code>의 길이 = <code>n</code> ≤ 50

<ul>
<li>2 ≤ <code>storage[i]</code>의 길이 = <code>m</code> ≤ 50

<ul>
<li><code>storage[i][j]</code>는 위에서 부터 <code>i + 1</code>번째 행 <code>j + 1</code>번째 열에 놓인 컨테이너의 종류를 의미합니다.</li>
<li><code>storage[i][j]</code>는 알파벳 대문자입니다.</li>
</ul></li>
</ul></li>
<li>1 ≤ <code>requests</code>의 길이 ≤ 100

<ul>
<li>1 ≤ <code>requests[i]</code>의 길이 ≤ 2</li>
<li><code>requests[i]</code>는 한 종류의 알파벳 대문자로 구성된 문자열입니다.</li>
<li><code>requests[i]</code>의 길이가 1이면 지게차를 이용한 출고 요청을, 2이면 크레인을 이용한 출고 요청을 의미합니다.</li>
</ul></li>
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
<td><code>requests</code>에 크레인을 사용한 출고 요청만 존재합니다.</td>
</tr>
<tr>
<td>#2</td>
<td>15%</td>
<td><code>requests</code>에 지게차를 사용한 출고 요청만 존재합니다.</td>
</tr>
<tr>
<td>#3</td>
<td>25%</td>
<td><code>requests</code>에 컨테이너의 종류가 최대 한 번씩 등장합니다. 즉, 이전에 꺼낸 컨테이너 종류를 다시 꺼내지 않습니다.</td>
</tr>
<tr>
<td>#4</td>
<td>50%</td>
<td>제한사항 외 추가조건이 없습니다.</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예</h5>
<table class="table">
        <thead><tr>
<th>storage</th>
<th>requests</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>["AZWQY", "CAABX", "BBDDA", "ACACA"]</td>
<td>["A", "BB", "A"]</td>
<td>11</td>
</tr>
<tr>
<td>["HAH", "HBH", "HHH", "HAH", "HBH"]</td>
<td>["C", "B", "B", "B", "B", "H"]</td>
<td>4</td>
</tr>
</tbody>
      </table>
<hr>

<h5>입출력 예 설명</h5>

<p><strong>입출력 예 #1</strong></p>

<p>문제 설명의 예시와 같습니다.</p>

<p><strong>입출력 예 #2</strong></p>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/95339b77-babc-4be8-96ee-60235ea50393/%E1%84%86%E1%85%AE%E1%86%AF%E1%84%85%E1%85%B2%E1%84%8E%E1%85%A1%E1%86%BC%E1%84%80%E1%85%A9-2.drawio.png" title="" alt="물류창고-2.drawio.png"></p>

<p>창고의 초기 상태와 모든 요청을 수행한 뒤의 상태입니다. 남은 컨테이너의 수인 4를 return 해야 합니다.</p>


> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges