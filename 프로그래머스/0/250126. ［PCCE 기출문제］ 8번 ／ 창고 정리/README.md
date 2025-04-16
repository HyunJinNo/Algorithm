# [level 0] [PCCE 기출문제] 8번 / 창고 정리 - 250126 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/250126) 

### 성능 요약

메모리: 77.5 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 04월 16일 11:15:28

### 문제 설명

<p>선빈이는 게임을 즐기던 중 가지고 있는 물건이 너무 많아 창고 정리를 하기로 했습니다. 선빈이가 보유한 게임 속 창고는 여러 칸으로 나누어져 있고 각 칸에는 물건들이 담겨있습니다. 창고를 정리할 방법을 고민하던 선빈이는 같은 물건이 여러 칸에 나누어 들어있는 것을 발견하고 우선 같은 물건끼리 최대한 겹쳐쌓는 방식으로 창고를 정리하기로 했습니다. 선빈이의 창고에 들어있는 물건의 이름과 개수는 리스트 형태로 주어지며, 한 칸에 겹쳐질 수 있는 물건의 개수에는 제한이 없다고 가정합니다. </p>

<p>예를 들어 창고의 각 칸에 담겨있는 물건의 이름이<code>storage = ["pencil", "pencil", "pencil", "book"]</code>, 각 물건의 개수가 <code>num = [2, 4, 3, 1]</code>이라면 연필과 책을 한 칸에 각각 겹쳐 쌓아 간단하게 <code>clean_storage = ["pencil", "book"]</code>, <code>clean_num = [9, 1]</code>로 만들 수 있습니다. <br>
<img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/b082d283-1d50-42bb-8e3f-4d1d2f9aaff4/pencil%20book%20javacpp.jpg" title="" alt="pencil book javacpp.jpg"></p>

<p>주어진 solution 함수는 정리되기 전 창고의 물건 이름이 담긴 문자열 리스트 <code>storage</code>와 각 물건의 개수가 담긴 정수 리스트 <code>num</code>이 주어질 때, 정리된 창고에서 개수가 가장 많은 물건의 이름을 return 하는 함수입니다. solution 함수가 올바르게 작동하도록 한 줄을 수정해 주세요.</p>

<hr>

<h4>제한사항</h4>

<ul>
<li>1 ≤ <code>storage</code>의 길이 = <code>num</code>의 길이 ≤ 30

<ul>
<li><code>storage[i]</code>는 영어 대소문자로 이루어져 있습니다.</li>
<li>물건은 대소문자를 구분합니다. 즉, "Book"과 "book"은 서로 다른 물건입니다.</li>
<li>1 ≤ <code>storage[i]</code>의 길이 ≤ 30</li>
<li>1 ≤ <code>num[i]</code> ≤ 20</li>
<li><code>num[i]</code>에는 <code>storage[i]</code>에 해당하는 물건의 개수가 담겨있습니다.</li>
</ul></li>
<li>가장 개수가 많은 물건이 두 가지 이상인 경우는 없습니다.</li>
<li>한 칸에는 한 종류의 물건만 들어갈 수 있습니다.</li>
</ul>

<hr>

<h4>입출력 예</h4>
<table class="table">
        <thead><tr>
<th>storage</th>
<th>num</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>["pencil", "pencil", "pencil", "book"]</td>
<td>[2, 4, 3, 1]</td>
<td>"pencil"</td>
</tr>
<tr>
<td>["doll", "doll", "doll", "doll"]</td>
<td>[1, 1, 1, 1]</td>
<td>"doll"</td>
</tr>
<tr>
<td>["apple", "steel", "leaf", "apple", "leaf"]</td>
<td>[5, 3, 5, 3, 7]</td>
<td>"leaf"</td>
</tr>
<tr>
<td>["mirror", "net", "mirror", "net", "bottle"]</td>
<td>[4, 1, 4, 1, 5]</td>
<td>"mirror"</td>
</tr>
</tbody>
      </table>
<hr>

<h4>입출력 예 설명</h4>

<p>입출력 예 #1</p>

<ul>
<li>본문에 설명된 대로 창고를 정리하면 <code>clean_storage = ["pencil", "book"]</code>, <code>clean_num = [9, 1]</code>이 됩니다. 따라서 가장 개수가 많은 물건인 <code>"pencil"</code>을 return합니다.</li>
</ul>

<p>입출력 예 #2</p>

<ul>
<li>창고를 정리하면 <code>clean_storage = ["doll"]</code>, <code>clean_num = [4]</code>가 됩니다. 따라서 가장 개수가 많은 물건인 <code>"doll"</code>을 return합니다.</li>
</ul>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/0889ad9a-8612-49d9-b089-b1c23e7b7ad1/doll.jpg" title="" alt="doll.jpg"></p>

<p>입출력 예 #3</p>

<ul>
<li>창고를 정리하면 <code>clean_storage = ["apple", "steel", "leaf"]</code>, <code>clean_num = [8, 3, 12]</code>가 됩니다. 따라서 가장 개수가 많은 물건인 <code>"leaf"</code>를 return합니다.</li>
</ul>

<p><img src="https://grepp-programmers.s3.ap-northeast-2.amazonaws.com/files/production/7416a51f-1aeb-4fe1-baaf-01c4a52cc63f/apple%20steel%20leaf.jpg" title="" alt="apple steel leaf.jpg"></p>

<p>입출력 예 #4</p>

<ul>
<li>창고를 정리하면 <code>clean_storage = ["mirror", "net", "bottle"]</code>, <code>clean_num = [8, 2, 5]</code>가 됩니다. 따라서 가장 개수가 많은 물건인 <code>"mirror"</code>를 return합니다.</li>
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