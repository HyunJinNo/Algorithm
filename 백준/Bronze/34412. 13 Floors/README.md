# [Bronze V] 13 Floors - 34412 

[문제 링크](https://www.acmicpc.net/problem/34412) 

### 성능 요약

메모리: 9332 KB, 시간: 88 ms

### 분류

수학, 구현, 사칙연산

### 제출 일자

2025년 10월 27일 10:15:56

### 문제 설명

<p>Bill is responsible for labeling all the floors on a new skyscraper. He's superstitious, so he wants to skip floor 13 while labeling the floors. This means that the <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-msup><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c><mjx-c class="mjx-c32"></mjx-c></mjx-mn><mjx-script style="vertical-align: 0.393em;"><mjx-mtext class="mjx-n" size="s"><mjx-c class="mjx-c74"></mjx-c><mjx-c class="mjx-c68"></mjx-c></mjx-mtext></mjx-script></mjx-msup></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mn>12</mn><mtext>th</mtext></msup></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$12^\text{th}$</span></mjx-container>, <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-msup><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c><mjx-c class="mjx-c33"></mjx-c></mjx-mn><mjx-script style="vertical-align: 0.393em;"><mjx-mtext class="mjx-n" size="s"><mjx-c class="mjx-c74"></mjx-c><mjx-c class="mjx-c68"></mjx-c></mjx-mtext></mjx-script></mjx-msup></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mn>13</mn><mtext>th</mtext></msup></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$13^\text{th}$</span></mjx-container>, and <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-msup><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c><mjx-c class="mjx-c34"></mjx-c></mjx-mn><mjx-script style="vertical-align: 0.404em;"><mjx-mtext class="mjx-n" size="s"><mjx-c class="mjx-c74"></mjx-c><mjx-c class="mjx-c68"></mjx-c></mjx-mtext></mjx-script></mjx-msup></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><msup><mn>14</mn><mtext>th</mtext></msup></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$14^\text{th}$</span></mjx-container> floors should be labeled <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c><mjx-c class="mjx-c32"></mjx-c></mjx-mn></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>12</mn></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$12$</span></mjx-container>, <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c><mjx-c class="mjx-c34"></mjx-c></mjx-mn></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>14</mn></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$14$</span></mjx-container>, and <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mn class="mjx-n"><mjx-c class="mjx-c31"></mjx-c><mjx-c class="mjx-c35"></mjx-c></mjx-mn></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mn>15</mn></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$15$</span></mjx-container>, respectively. Given the true floor number, can you tell Bill what to label that floor?</p>

### 입력 

 <p>The input is a single positive integer <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D465 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="4"><mjx-c class="mjx-c2264"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="4"><mjx-c class="mjx-c31"></mjx-c></mjx-mn><mjx-mstyle><mjx-mspace style="width: 0.167em;"></mjx-mspace></mjx-mstyle><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c><mjx-c class="mjx-c30"></mjx-c><mjx-c class="mjx-c30"></mjx-c></mjx-mn><mjx-mstyle><mjx-mspace style="width: 0.167em;"></mjx-mspace></mjx-mstyle><mjx-mn class="mjx-n"><mjx-c class="mjx-c30"></mjx-c><mjx-c class="mjx-c30"></mjx-c><mjx-c class="mjx-c30"></mjx-c></mjx-mn></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>x</mi><mo>≤</mo><mn>1</mn><mstyle scriptlevel="0"><mspace width="0.167em"></mspace></mstyle><mn>000</mn><mstyle scriptlevel="0"><mspace width="0.167em"></mspace></mstyle><mn>000</mn></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$x \leq 1\,000\,000$</span></mjx-container> representing the true floor number.</p>

### 출력 

 <p>The output is a single positive integer, which is the label for the corresponding floor in the input.</p>

