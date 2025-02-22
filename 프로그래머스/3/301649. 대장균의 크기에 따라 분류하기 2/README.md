# [level 3] 대장균의 크기에 따라 분류하기 2 - 301649 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/301649) 

### 성능 요약

메모리: undefined, 시간: 

### 구분

코딩테스트 연습 > SELECT

### 채점결과

합계: 100.0 / 100.0

### 제출 일자

2025년 02월 22일 16:03:27

### 문제 설명

<p>대장균들은 일정 주기로 분화하며, 분화를 시작한 개체를 부모 개체, 분화가 되어 나온 개체를 자식 개체라고 합니다.<br>
다음은 실험실에서 배양한 대장균들의 정보를 담은 <code>ECOLI_DATA</code> 테이블입니다. <code>ECOLI_DATA</code> 테이블의 구조는 다음과 같으며,  <code>ID</code>, <code>PARENT_ID</code>, <code>SIZE_OF_COLONY</code>, <code>DIFFERENTIATION_DATE</code>, <code>GENOTYPE</code> 은 각각 대장균 개체의 ID, 부모 개체의 ID, 개체의 크기, 분화되어 나온 날짜, 개체의 형질을 나타냅니다.</p>
<table class="table">
        <thead><tr>
<th>Column name</th>
<th>Type</th>
<th>Nullable</th>
</tr>
</thead>
        <tbody><tr>
<td>ID</td>
<td>INTEGER</td>
<td>FALSE</td>
</tr>
<tr>
<td>PARENT_ID</td>
<td>INTEGER</td>
<td>TRUE</td>
</tr>
<tr>
<td>SIZE_OF_COLONY</td>
<td>INTEGER</td>
<td>FALSE</td>
</tr>
<tr>
<td>DIFFERENTIATION_DATE</td>
<td>DATE</td>
<td>FALSE</td>
</tr>
<tr>
<td>GENOTYPE</td>
<td>INTEGER</td>
<td>FALSE</td>
</tr>
</tbody>
      </table>
<p>최초의 대장균 개체의 <code>PARENT_ID</code> 는 NULL 값입니다.</p>

<hr>

<h5>문제</h5>

<p>대장균 개체의 크기를 내름차순으로 정렬했을 때 상위 0% ~ 25% 를 'CRITICAL', 26% ~ 50% 를 'HIGH', 51% ~ 75% 를 'MEDIUM', 76% ~ 100% 를 'LOW' 라고 분류합니다. 대장균 개체의 ID(<code>ID</code>) 와 분류된 이름(<code>COLONY_NAME</code>)을 출력하는 SQL 문을 작성해주세요. 이때 결과는 개체의 ID 에 대해 오름차순 정렬해주세요 . 단, 총 데이터의 수는 4의 배수이며 같은 사이즈의 대장균 개체가 서로 다른 이름으로 분류되는 경우는 없습니다.</p>

<hr>

<h5>예시</h5>

<p>예를 들어 <code>ECOLI_DATA</code> 테이블이 다음과 같다면</p>
<table class="table">
        <thead><tr>
<th>ID</th>
<th>PARENT_ID</th>
<th>SIZE_OF_COLONY</th>
<th>DIFFERENTIATION_DATE</th>
<th>GENOTYPE</th>
</tr>
</thead>
        <tbody><tr>
<td>1</td>
<td>NULL</td>
<td>10</td>
<td>2019/01/01</td>
<td>5</td>
</tr>
<tr>
<td>2</td>
<td>NULL</td>
<td>2</td>
<td>2019/01/01</td>
<td>3</td>
</tr>
<tr>
<td>3</td>
<td>1</td>
<td>100</td>
<td>2020/01/01</td>
<td>4</td>
</tr>
<tr>
<td>4</td>
<td>2</td>
<td>16</td>
<td>2020/01/01</td>
<td>4</td>
</tr>
<tr>
<td>5</td>
<td>2</td>
<td>17</td>
<td>2020/01/01</td>
<td>6</td>
</tr>
<tr>
<td>6</td>
<td>4</td>
<td>101</td>
<td>2021/01/01</td>
<td>22</td>
</tr>
<tr>
<td>7</td>
<td>6</td>
<td>101</td>
<td>2022/01/01</td>
<td>23</td>
</tr>
<tr>
<td>8</td>
<td>6</td>
<td>1</td>
<td>2022/01/01</td>
<td>27</td>
</tr>
</tbody>
      </table>
<p>기준에 의해 분류된 대장균들의 ID는 다음과 같습니다.</p>

<p>CRITICAL (상위 0% ~ 25%) : ID 6, ID 7<br>
HIGH (상위 26% ~ 50%) : ID 3, ID 5<br>
MEDIUM (상위 51% ~ 75%) : ID 1, ID 4<br>
LOW (상위 76% ~ 100%) : ID 2, ID 8</p>

<p>따라서 결과를 ID 에 대해 오름차순 정렬하면 다음과 같아야 합니다.</p>
<table class="table">
        <thead><tr>
<th>ID</th>
<th>COLONY_NAME</th>
</tr>
</thead>
        <tbody><tr>
<td>1</td>
<td>MEDIUM</td>
</tr>
<tr>
<td>2</td>
<td>LOW</td>
</tr>
<tr>
<td>3</td>
<td>HIGH</td>
</tr>
<tr>
<td>4</td>
<td>MEDIUM</td>
</tr>
<tr>
<td>5</td>
<td>HIGH</td>
</tr>
<tr>
<td>6</td>
<td>CRITICAL</td>
</tr>
<tr>
<td>7</td>
<td>CRITICAL</td>
</tr>
<tr>
<td>8</td>
<td>LOW</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://school.programmers.co.kr/learn/challenges