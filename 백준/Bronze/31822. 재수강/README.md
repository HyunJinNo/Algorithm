# [Bronze IV] 재수강 - 31822 

[문제 링크](https://www.acmicpc.net/problem/31822) 

### 성능 요약

메모리: 9332 KB, 시간: 92 ms

### 분류

구현, 문자열

### 제출 일자

2026년 4월 3일 10:37:55

### 문제 설명

<p>국민대학교에서는 수강 신청, 성적 조회 등 과목의 구분이 필요할 때 ’과목 코드’를 사용한다. 과목 코드는 10자리로 이루어져 있으며, 7번째 자리는 영어 알파벳 대문자 또는 숫자, 8번째 자리는 하이픈(<span style="color:#e74c3c;"><code>-</code></span>), 나머지 자리는 숫자로 이루어져 있다.</p>

<p>당신은 망한 학점을 복구하기 위해 재수강을 해야 하는데, 재수강을 하기 위해서는 재수강할 과목과 과목코드의 앞 5자리가 일치하는 과목을 수강해야 한다. 재수강할 과목의 과목 코드와 수강 신청 가능한 과목 목록이 주어지면, 재수강으로 인정되는 과목이 몇 개가 있는지 출력하라.</p>

### 입력 

 <p>첫 번째 줄에 재수강할 과목의 과목 코드가 주어진다.</p>

<p>두 번째 줄에 수강 신청 가능한 과목의 개수 <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D441 TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>N</mi></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$N$</span></mjx-container>이 주어진다. <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mo class="mjx-n"><mjx-c class="mjx-c28"></mjx-c></mjx-mo><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c2264"></mjx-c></mjx-mo><mjx-mi class="mjx-i" space="4"><mjx-c class="mjx-c1D441 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c2264"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="4"><mjx-c class="mjx-c31"></mjx-c><mjx-c class="mjx-c36"></mjx-c></mjx-mn><mjx-mo class="mjx-n"><mjx-c class="mjx-c29"></mjx-c></mjx-mo></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mo stretchy="false">(</mo><mn>1</mn><mo>≤</mo><mi>N</mi><mo>≤</mo><mn>16</mn><mo stretchy="false">)</mo></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$(1\le N\le 16)$</span> </mjx-container></p>

<p>그다음 <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D441 TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>N</mi></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$N$</span></mjx-container>개의 줄에 걸쳐 수강 신청 가능한 과목의 과목 코드가 주어진다. 입력되는 과목 코드는 서로 다르다.</p>

### 출력 

 <p>재수강으로 인정되는 과목의 개수를 출력한다.</p>

