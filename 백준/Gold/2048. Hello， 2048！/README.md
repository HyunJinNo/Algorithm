# [Gold IV] Hello, 2048! - 2048 

[문제 링크](https://www.acmicpc.net/problem/2048) 

### 성능 요약

메모리: 44932 KB, 시간: 404 ms

### 분류

수학, 정수론

### 제출 일자

2024년 3월 15일 13:24:27

### 문제 설명

<p>컴퓨터공학을 전공하고 있는 성빈은 2의 거듭제곱 수들을 다른 수들보다 특별하게 생각한다. 어느 날, 성빈은 달력을 보다가 곧 2048년이 다가온다는 사실을 알게 되었다. 성빈은 임의의 사람이 일생 중에 2의 거듭제곱 수 연도에 살아보았을 확률이 궁금해졌는데, 시간이 흐르면 흐를수록 이 확률은 낮아질 것이라는 생각이 들었다. 자신이 2048년에 직접 경험할 수 있다는 사실이 흥미로웠던 성빈은 2048이라는 숫자를 한참 바라보다가, 신기한 사실을 발견했다. 2048은 2와 4와 8이라는 또 다른 2의 거듭제곱 수들을 3개나 포함하고 있는 수였다! 그러자 성빈은 2의 거듭제곱 수들을 붙여써서 만든 수들에 대해 생각해보다가, 다음과 같은 궁금증이 생겼다.</p>

<p style="text-align: center;"><mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"> <mjx-math class="MJX-TEX" aria-hidden="true"><mjx-msup><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-script style="vertical-align: 0.363em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D459 TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msup><mjx-mo class="mjx-n"><mjx-c class="mjx-c2C"></mjx-c></mjx-mo><mjx-msup space="2"><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-script style="vertical-align: 0.363em;"><mjx-texatom size="s" texclass="ORD"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D459 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-texatom></mjx-script></mjx-msup><mjx-mo class="mjx-n"><mjx-c class="mjx-c2C"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="2"><mjx-c class="mjx-c22EF"></mjx-c></mjx-mo><mjx-mo class="mjx-n" space="2"><mjx-c class="mjx-c2C"></mjx-c></mjx-mo><mjx-msup space="2"><mjx-mn class="mjx-n"><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-script style="vertical-align: 0.363em;"><mjx-mi class="mjx-i" size="s"><mjx-c class="mjx-c1D45F TEX-I"></mjx-c></mjx-mi></mjx-script></mjx-msup></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mn>2</mn><mi>l</mi></msup><mo>,</mo><msup><mn>2</mn><mrow data-mjx-texclass="ORD"><mi>l</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>,</mo><mo>⋯</mo><mo>,</mo><msup><mn>2</mn><mi>r</mi></msup></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$2^l, 2^{l+1}, \cdots, 2^r$</span></mjx-container>을 10진법으로 표현하여 순서대로 이어 붙여 만든 새로운 10진법 수를 생각했을 때, 이 수는 몇 번이나 2로 나누어떨어질 수 있을까?</p>

<p>그러나 수의 크기가 너무 커지자, 계산하기가 힘들었다. 성빈을 위해 이 질문에 답을 계산하는 프로그램을 작성해 보자!</p>

### 입력 

 <p>첫 줄에 테스트 케이스의 개수를 의미하는 정수 <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D447 TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>T</mi></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$T$</span></mjx-container>가 주어진다.</p>

<p>각 테스트 케이스마다 두 정수 <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D459 TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>l</mi></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$l$</span></mjx-container>과 <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D45F TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>r</mi></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$r$</span></mjx-container>이 공백으로 구분되어 입력된다.</p>

### 출력 

 <p>각 테스트 케이스마다 성빈의 질문에 대한 답을 한 줄에 하나씩 출력한다.</p>

