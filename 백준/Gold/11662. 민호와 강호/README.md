# [Gold IV] 민호와 강호 - 11662 

[문제 링크](https://www.acmicpc.net/problem/11662) 

### 성능 요약

메모리: 9700 KB, 시간: 96 ms

### 분류

수학, 기하학, 삼분 탐색

### 제출 일자

2025년 10월 20일 09:56:57

### 문제 설명

<p>민호와 강호가 2차원 좌표 평면 위에 있다. 민호는 점 A(Ax, Ay)에서 점 B(Bx, By)를 향해 걸어가고 있고, 강호는 점 C(Cx, Cy)에서 점 D(Dx, Dy)를 향해 걸어가고 있다. 민호와 강호는 동시에 출발하고, 민호가 점 B에 도착하는 순간 강호도 점 D에 도착한다. 또, 두 사람은 항상 일정한 속도로 걸어간다. 두 사람의 거리가 가장 가까울 때, 거리를 구하는 프로그램을 작성하시오.</p>

<p>두 점 (x1, y1), (x2, y2)사이의 거리는 <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-msqrt><mjx-sqrt><mjx-surd><mjx-mo class="mjx-sop"><mjx-c class="mjx-c221A TEX-S1"></mjx-c></mjx-mo></mjx-surd><mjx-box style="padding-top: 0.103em;"><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D465 TEX-I"></mjx-c></mjx-mi><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c1D465 TEX-I"></mjx-c></mjx-mi><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn><mjx-msup><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-script style="vertical-align: 0.289em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msup><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D466 TEX-I"></mjx-c></mjx-mi><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2212"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="3"><mjx-c class="mjx-c1D466 TEX-I"></mjx-c></mjx-mi><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn><mjx-msup><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo><mjx-script style="vertical-align: 0.289em;"><mjx-mn class="mjx-n" size="s"><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-script></mjx-msup></mjx-box></mjx-sqrt></mjx-msqrt></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mo stretchy="false">(</mo><mi>x</mi><mn>2</mn><mo>−</mo><mi>x</mi><mn>1</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy="false">(</mo><mi>y</mi><mn>2</mn><mo>−</mo><mi>y</mi><mn>1</mn><msup><mo stretchy="false">)</mo><mn>2</mn></msup></msqrt></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">\(\sqrt{(x2-x1)^2 + (y2-y1)^2}\)</span></mjx-container> 이다.</p>

### 입력 

 <p>첫째 줄에 Ax, Ay, Bx, By, Cx, Cy, Dx, Dy가 주어진다. 입력으로 주어지는 모든 좌표는 0보다 크거나 같고, 10000보다 작거나 같은 정수이다.</p>

### 출력 

 <p>민호와 강호가 가장 가까웠을 때의 거리를 출력한다. 절대/상대 오차는 10<sup>-6</sup>까지 허용한다.</p>

