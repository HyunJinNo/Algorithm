# [Bronze V] 공통교육과정 - 34813 

[문제 링크](https://www.acmicpc.net/problem/34813) 

### 성능 요약

메모리: 9340 KB, 시간: 92 ms

### 분류

구현, 문자열

### 제출 일자

2025년 12월 10일 10:05:57

### 문제 설명

<p><mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"> <mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c><mjx-c class="mjx-c30"></mjx-c><mjx-c class="mjx-c32"></mjx-c><mjx-c class="mjx-c35"></mjx-c></mjx-mn></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>2025</mn></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$2025$</span></mjx-container>학년도 기준으로, 서울대학교에서 흔히 교양교육과정이라고 불리는 공통교육과정은, 크게 학문의 토대(Foundation), 지성의 열쇠(Claves), 베리타스(Veritas), 지성의 확장(Exploration)이라는 네 개의 영역으로 구성되어 있다. 서울대학교 공통교육과정에 속해 있는 교양 과목의 교과목번호는 <span style="color:#e74c3c;"><code>F</code></span>, <span style="color:#e74c3c;"><code>C</code></span>, <span style="color:#e74c3c;"><code>V</code></span>, <span style="color:#e74c3c;"><code>E</code></span> 중 하나로 시작하며, 각각 학문의 토대, 지성의 열쇠, 베리타스, 지성의 확장에 속해 있는 과목임을 뜻한다.</p>

<p>서울대학교 교양 과목의 교과목번호가 주어질 때, <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c><mjx-c class="mjx-c30"></mjx-c><mjx-c class="mjx-c32"></mjx-c><mjx-c class="mjx-c35"></mjx-c></mjx-mn></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>2025</mn></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$2025$</span></mjx-container>학년도 기준으로 해당 과목이 어느 영역에 속해 있는 과목인지 판별해 보자.</p>

### 입력 

 <p>첫째 줄에 교양 과목의 교과목번호를 나타내는 문자열이 입력으로 주어진다. 이 문자열의 길이는 항상 <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mn class="mjx-n"><mjx-c class="mjx-c37"></mjx-c></mjx-mn></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>7</mn></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$7$</span></mjx-container> 또는 <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mn class="mjx-n"><mjx-c class="mjx-c38"></mjx-c></mjx-mn></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>8</mn></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$8$</span></mjx-container>이다.</p>

<p>첫 번째 문자는 알파벳 대문자 <span style="color:#e74c3c;"><code>F</code></span>, <span style="color:#e74c3c;"><code>C</code></span>, <span style="color:#e74c3c;"><code>V</code></span>, <span style="color:#e74c3c;"><code>E</code></span> 중 하나이고, 네 번째 문자는 <span style="color:#e74c3c;"><code>.</code></span>(마침표)이다. <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-mo class="mjx-n"><mjx-c class="mjx-c2C"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="2"><mjx-c class="mjx-c33"></mjx-c></mjx-mn><mjx-mo class="mjx-n"><mjx-c class="mjx-c2C"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="2"><mjx-c class="mjx-c35"></mjx-c></mjx-mn><mjx-mo class="mjx-n"><mjx-c class="mjx-c2C"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="2"><mjx-c class="mjx-c36"></mjx-c></mjx-mn><mjx-mo class="mjx-n"><mjx-c class="mjx-c2C"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="2"><mjx-c class="mjx-c37"></mjx-c></mjx-mn></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>7</mn></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$2, 3, 5, 6, 7$</span></mjx-container>번째 문자는 각각 <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>0</mn></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$0$</span></mjx-container>부터 <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mn class="mjx-n"><mjx-c class="mjx-c39"></mjx-c></mjx-mn></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>9</mn></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$9$</span></mjx-container>까지의 숫자로 이루어져 있다. 만약 문자열의 길이가 <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mn class="mjx-n"><mjx-c class="mjx-c38"></mjx-c></mjx-mn></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>8</mn></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$8$</span></mjx-container>인 경우 마지막 문자는 대문자 <span style="color:#e74c3c;"><code>L</code></span>이다.</p>

<p>서울대학교에 실제로 존재하는 교과목번호가 아니더라도, 입력 형식만 올바르면 입력으로 주어질 수 있다. 이 경우도 앞서 설명한 규칙에 따라 네 영역 중 어느 영역에 속해 있는지 올바르게 판정해야 한다.</p>

### 출력 

 <p>주어진 교양 과목이 학문의 토대에 속해 있으면 <span style="color:#e74c3c;"><code>Foundation</code></span>, 지성의 열쇠에 속해 있으면 <span style="color:#e74c3c;"><code>Claves</code></span>, 베리타스에 속해 있으면 <span style="color:#e74c3c;"><code>Veritas</code></span>, 지성의 확장에 속해 있으면 <span style="color:#e74c3c;"><code>Exploration</code></span>을 출력한다.</p>

