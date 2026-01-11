# [Gold IV] 곡예 비행 - 21923 

[문제 링크](https://www.acmicpc.net/problem/21923) 

### 성능 요약

메모리: 130864 KB, 시간: 1092 ms

### 분류

다이나믹 프로그래밍, 격자 그래프

### 제출 일자

2026년 1월 11일 10:54:09

### 문제 설명

<p>동헌이는 모형 비행기 조종 대회에 참가하였다. 이 대회에서는 격자 모양의 공간에서 모형 비행기를 조종하여 얻는 <strong>비행 점수</strong>로 순위를 매긴다. 격자의 각 칸에는 점수가 부여되어 있고, 비행 점수는 "<strong>상승 비행</strong>을 할 때 지나간 칸에 부여된 점수의 총합"과 "<strong>하강 비행</strong>을 할 때 지나간 칸에 부여된 점수의 총합"을 더한 값이다. 출발한 칸과 도착한 칸도 지나간 칸으로 간주한다.</p>

<p style="text-align: center;"><img alt="" src="https://upload.acmicpc.net/6babc434-88bc-4083-b78d-6b99dff6b9ca/-/crop/1639x573/156,401/-/preview/" style="height: 227px; width: 650px;"></p>

<p style="text-align: center;"><그림 1> 시작과 끝 칸 및 가능한 이동 방향</p>

<p>모형 비행기는 맨 왼쪽 아래 칸에서 상승 비행으로 비행을 시작해야 하고, 중간에 상승 비행에서 하강 비행으로 변경한 후, 맨 오른쪽 아래 칸에서 하강 비행으로 비행을 종료해야 한다. 상승 비행에서 하강 비행으로 변경할 때에는 다른 칸으로 이동할 수 없다. <strong>즉, 상승 비행이 끝난 칸에서 하강 비행을 시작해야 한다.</strong></p>

<p>모형 비행기는 상승 비행 중에는 앞 또는 위로만 이동할 수 있고, 하강 비행 중에는 앞 또는 아래로만 이동할 수 있다.</p>

<p style="text-align: center;"><img alt="" src="https://upload.acmicpc.net/17063436-6675-4c21-9044-018a8476c5ae/-/crop/1642x512/157,461/-/preview/" style="height: 203px; width: 650px;"></p>

<p style="text-align: center;"><그림 2> 모형 비행기의 이동 경로</p>

<p>위의 예시에서, 각 칸에 적힌 수는 그 칸에 부여된 점수이고, 수가 적혀 있지 않은 칸의 점수는 0이라고 가정하자. 그리고 모형 비행기가 1, 2, ..., 15의 순서대로 비행을 했다고 가정하자.</p>

<p style="text-align: center;"><img alt="" src="https://upload.acmicpc.net/ce6860ed-a632-4cf4-951f-cd7912f83796/-/crop/1652x525/149,453/-/preview/" style="height: 207px; width: 650px;"></p>

<p style="text-align: center;"><그림 3> 상승 비행의 이동 경로</p>

<p style="text-align: center;"><img alt="" src="https://upload.acmicpc.net/c2108165-cc33-4c13-9231-988ee14ecd2e/-/crop/1642x512/152,461/-/preview/" style="height: 203px; width: 650px;"></p>

<p style="text-align: center;"><그림 4> 하강 비행의 이동 경로</p>

<p>이 경우, 상승 비행은 1이 적힌 칸에서 시작하고 8이 적힌 칸에서 끝난다. 하강 비행은 8이 적힌 칸에서 시작하고 15가 적힌 칸에서 끝난다. 이와 같이 비행을 하였을 때 얻는 점수는 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8) + (8 + 9 + 10 + 11 + 12 + 13 + 14 + 15) = 128 이다.</p>

<p>동헌이는 이 대회에서 얻을 수 있는 최대 비행 점수가 궁금하다. 동헌이를 위해 얻을 수 있는 최대 비행 점수를 구해주자.</p>

### 입력 

 <p>첫째 줄에 심사위원들이 나눠놓은 구역(격자)의 세로 길이 <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D441 TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>N</mi></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$N$</span></mjx-container>, 가로 길이 <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D440 TEX-I"></mjx-c></mjx-mi></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>M</mi></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$M$</span></mjx-container>이 공백과 함께 주어진다.</p>

<p>두 번째 줄부터 <mjx-container class="MathJax" jax="CHTML" style="font-size: 109%; position: relative;"><mjx-math class="MJX-TEX" aria-hidden="true"><mjx-mi class="mjx-i"><mjx-c class="mjx-c1D441 TEX-I"></mjx-c></mjx-mi><mjx-mo class="mjx-n" space="3"><mjx-c class="mjx-c2B"></mjx-c></mjx-mo><mjx-mn class="mjx-n" space="3"><mjx-c class="mjx-c31"></mjx-c></mjx-mn></mjx-math><mjx-assistive-mml unselectable="on" display="inline"><math xmlns="http://www.w3.org/1998/Math/MathML"><mi>N</mi><mo>+</mo><mn>1</mn></math></mjx-assistive-mml><span aria-hidden="true" class="no-mathjax mjx-copytext">$N+1$</span></mjx-container>번째 줄까지, 각 칸에 해당하는 점수가 한 줄에 한 행씩 공백과 함께 주어진다.</p>

### 출력 

 <p>동헌이가 얻을 수 있는 최대 점수를 출력하라.</p>

