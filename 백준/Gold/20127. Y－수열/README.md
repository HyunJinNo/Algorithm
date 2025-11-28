# [Gold V] Y-수열 - 20127 

[문제 링크](https://www.acmicpc.net/problem/20127) 

### 성능 요약

메모리: 27312 KB, 시간: 196 ms

### 분류

애드 혹, 많은 조건 분기

### 제출 일자

2025년 11월 28일 09:51:39

### 문제 설명

<p><em>N</em>개의 정수로 이루어진 수열 <em>a<sub>1</sub></em>, ... , <em>a<sub>N</sub></em>이 있다. 택희는 해당 수열이 증가수열 혹은 감소수열이 되게 만들고 싶다.</p>

<p>증가수열은 모든 <em>i</em>(1 ≤ <em>i</em> < <em>N</em>)에 대해서 <em>a<sub>i</sub></em> ≤ <em>a<sub>i+1</sub></em>을 만족하는 수열이고, 감소수열은 <em>a<sub>i</sub></em> ≥ <em>a<sub>i+1</sub></em>을 만족하는 수열이다.</p>

<p>택희는 해당 수열의 맨 앞의 <em>k</em>개의 원소를 맨 뒤로 옮겨서 증가수열 또는 감소수열을 만들고 싶다. 즉, <em>a<sub>k+1</sub></em>, ..., <em>a<sub>N</sub></em>, <em>a<sub>1</sub></em>, ..., <em>a<sub>k</sub></em>가 증가수열, 또는 감소수열이 돼야 한다. 옮기지 않는 경우는 <em>k</em>=0이라고 하자. 이때, 적절한 <em>k</em>를 골라서 원하는 수열을 만들 수 있게 도와줘라.</p>

### 입력 

 <p>다음과 같이 입력이 주어진다.</p>

<div style="background:#eeeeee;border:1px solid #cccccc;padding:5px 10px;"><em>N</em><br>
<i>a<sub>1</sub></i> <i>. . .</i> <i>a<sub>N</sub></i></div>

### 출력 

 <p>증가수열, 또는 감소수열을 만들 수 있는 <em>k</em>를 출력하여라. 가능한 <em>k</em>가 여러 개면 가능한 가장 작은 <em>k</em>를 출력하여라. 만약에 그런 <em>k</em>가 존재하지 않는다면 <span style="color:#e74c3c;"><code>-1</code></span>을 출력하여라.</p>

