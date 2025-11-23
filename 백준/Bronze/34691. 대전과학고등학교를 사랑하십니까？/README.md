# [Bronze V] 대전과학고등학교를 사랑하십니까? - 34691 

[문제 링크](https://www.acmicpc.net/problem/34691) 

### 성능 요약

메모리: 9428 KB, 시간: 88 ms

### 분류

구현

### 제출 일자

2025년 11월 23일 12:41:56

### 문제 설명

<p>DSHStack의 참가자라면, 학교를 사랑하는 마음은 아는 것에서부터 시작되지 않을까요?</p>

<p>학교의 상징을 물어보는 질문이 주어졌을 때, 해당 상징의 <strong>학명</strong>을 정답으로 출력해 보자.</p>

<ol>
<li>질문 <span style="color:#e74c3c;"><code>animal</code></span>의 정답은 학교의 상징 동물인 호랑이이다.

<ul>
<li>호랑이의 학명은 <em>Panthera tigris</em> 이다.</li>
</ul>
</li>
<li>질문 <span style="color:#e74c3c;"><code>tree</code></span>의 정답은 학교의 상징 나무인 소나무이다.
<ul>
<li>소나무의 학명은 <em>Pinus densiflora</em> 이다.</li>
</ul>
</li>
<li>질문 <span style="color:#e74c3c;"><code>flower</code></span>의 정답은 학교의 상징 꽃인 개나리이다.
<ul>
<li>개나리의 학명은 <em>Forsythia koreana</em> 이다.</li>
</ul>
</li>
</ol>

### 입력 

 <p>첫째 줄부터 한 줄에 하나씩 문자열이 주어진다.</p>

<p>입력되는 문자열은 <span style="color:#e74c3c;"><code>animal</code></span>, <span style="color:#e74c3c;"><code>tree</code></span>, <span style="color:#e74c3c;"><code>flower</code></span>, <span style="color:#e74c3c;"><code>end</code></span> 중 하나이며, <span style="color:#e74c3c;"><code>end</code></span>는 입력의 마지막 줄에만 항상 주어진다. <span style="color:#e74c3c;"><code>end</code></span>는 질문이 아니며, 처리하지 않는다.</p>

<p>질문은 <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$1$</span></mjx-container>회 이상 주어지며, <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn><mjx-mstyle><mjx-mspace style="width: 0.167em;"></mjx-mspace></mjx-mstyle><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c><mjx-c class="mjx-c30"></mjx-c><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn><mstyle scriptlevel="0"><mspace width="0.167em"></mspace></mstyle><mn>000</mn></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$1\,000$</span></mjx-container>회 이상 주어지지 않는다.</p>

### 출력 

 <p>입력된 각 질문에 해당하는 상징의 <strong>학명</strong>을 한 줄에 하나씩 출력한다.</p>

