# [Gold I] Balanced Lineup - 6213 

[문제 링크](https://www.acmicpc.net/problem/6213) 

### 성능 요약

메모리: 75292 KB, 시간: 820 ms

### 분류

자료 구조, 세그먼트 트리

### 제출 일자

2024년 5월 24일 10:30:16

### 문제 설명

<p>For the daily milking, Farmer John's N cows (1 <= N <= 50,000) always line up in the same order. One day Farmer John decides to organize a game of Ultimate Frisbee with some of the cows. To keep things simple, he will take a contiguous range of cows from the milking lineup to play the game. However, for all the cows to have fun, they should not differ too much in height.</p>

<p>Farmer John has made a list of Q (1 <= Q <= 180,000) potential groups of cows and their heights (1 <= height <= 1,000,000). For each group, he wants your help to determine the difference in height between the shortest and the tallest cow in the group.</p>

<p>Note: on the largest test case, I/O takes up the majority of the runtime.</p>

### 입력 

 <ul>
	<li>Line 1: Two space-separated integers, N and Q.</li>
	<li>Lines 2..N+1: Line i+1 contains a single integer that is the height of cow i</li>
	<li>Lines N+2..N+Q+1: Two integers A and B (1 <= A <= B <= N), representing the range of cows from A to B inclusive.</li>
</ul>

<p> </p>

### 출력 

 <ul>
	<li>Lines 1..Q: Each line contains a single integer that is an answer to an input query and tells the difference in height between the tallest and shortest cow in the input range.</li>
</ul>

