# [level 0] [PCCE 기출문제] 8번 / 닉네임 규칙 - 340200 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/340200) 

### 성능 요약

메모리: 80.6 MB, 시간: 12.83 ms

### 구분

코딩테스트 연습 > 코딩 기초 트레이닝

### 채점결과

정확성: 100.0<br/>합계: 100.0 / 100.0

### 제출 일자

2025년 04월 16일 10:57:41

### 문제 설명

<p>온라인 서비스를 이용하기 위해서 닉네임이 필요합니다. 이때 닉네임이 될 수 있는 조건은 다음과 같습니다.</p>

<ul>
<li>닉네임의 길이가 4자 이상 8자 이하여야합니다.</li>
<li>닉네임에는 소문자 <code>l</code>과<code>w</code>, 대문자 <code>O</code>와 <code>W</code>를 사용할 수 없습니다.</li>
<li>이외의 영어 대소문자와 숫자는 모두 사용이 가능합니다.</li>
</ul>

<p>주어진 solution 함수는 사용할 수 없는 닉네임 <code>nickname</code>을 받아 사용할 수 있는 닉네임으로 바꿔주는 함수입니다. 이때 닉네임을 변경하는 규칙은 다음과 같으며 첫 번째 규칙부터 순서대로 적용합니다.</p>

<ol>
<li>소문자 <code>l</code>을 대문자 <code>I</code>로 변경합니다.</li>
<li>소문자 <code>w</code>를 두 개의 소문자 <code>v</code>, 즉 <code>vv</code>로 변경합니다.</li>
<li>대문자 <code>W</code>를 두 개의 대문자 <code>V</code>, 즉 <code>VV</code>로 변경합니다.</li>
<li>대문자 <code>O</code>를 숫자 <code>0</code>으로 변경합니다.</li>
<li>수정된 닉네임의 길이가 4 미만일 경우 뒤에 소문자 <code>o</code>를 길이가 4가 될때까지 이어붙입니다.</li>
<li>수정된 닉네임의 길이가 8보다 클 경우 8번째 문자까지만 사용합니다.</li>
</ol>

<p>주어진 solution 함수에는 위의 규칙 중 올바르게 적용되지 않는 것이 있습니다. solution 함수가 올바르게 작동하도록 한 줄을 수정해주세요.</p>

<hr>

<h4>제한사항</h4>

<ul>
<li>1 ≤ <code>nickname</code>의 길이 ≤ 10</li>
<li><code>nickname</code>은 영어 대소문자와 숫자로만 이루어져있습니다.</li>
</ul>

<hr>

<h4>입출력 예</h4>
<table class="table">
        <thead><tr>
<th>nickname</th>
<th>result</th>
</tr>
</thead>
        <tbody><tr>
<td>"WORLDworld"</td>
<td>"VV0RLDvv"</td>
</tr>
<tr>
<td>"GO"</td>
<td>"G0oo"</td>
</tr>
</tbody>
      </table>
<hr>

<h4>입출력 예 설명</h4>

<p>입출력 예 #1</p>

<ul>
<li>닉네임 "WORLDworld"는 1, 2, 3, 4, 6 단계를 거쳐 "VV0RLDvv"가 됩니다.</li>
</ul>
<div class="highlight"><pre class="codehilite"><code>"WORLDworld" -&gt; "WORLDworId" -&gt; "WORLDvvorId" -&gt; "VVORLDvvorId" -&gt; "VV0RLDvvorId" -&gt; "VV0RLDvv"
</code></pre></div>
<p>입출력 예 #2</p>

<ul>
<li>닉네임 "GO"는 4, 5 단계를 거쳐 "G0oo"가 됩니다.</li>
</ul>
<div class="highlight"><pre class="codehilite"><code>"GO" -&gt; "G0" -&gt; "G0oo"
</code></pre></div>
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