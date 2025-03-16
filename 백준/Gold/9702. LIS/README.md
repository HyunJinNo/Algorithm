# [Gold I] LIS - 9702 

[문제 링크](https://www.acmicpc.net/problem/9702) 

### 성능 요약

메모리: 15192 KB, 시간: 368 ms

### 분류

가장 긴 증가하는 부분 수열: O(n log n)

### 제출 일자

2025년 3월 16일 10:35:27

### 문제 설명

<p>Mr. C is interested with Longest Increasing Subsequence problem. Given a sequence S = s<sub>1</sub>, s<sub>2</sub>, …, s<sub>N</sub>. The Longest Increasing Subsequence is the subsequence L = l<sub>1</sub>, l<sub>2</sub>, …, l<sub>k</sub> of S such that l<sub>1</sub> < l<sub>2</sub> < … < l<sub>k</sub>. </p>

<p>Given a sequence S, find the total length of LIS of every consecutive subsequence (subsequence which elements are consecutive in the original sequence) of S with non zero length!</p>

### 입력 

 <p>The first line of input consists of an integer T denotes the number of cases. It is followed by T blocks, each representing a case.</p>

<p>The first line of each case contains an integers: N (1 ≤ N ≤ 500), the length of S.</p>

<p>The next N lines each consists of an integer s<sub>i</sub> (1 ≤ s<sub>i</sub> ≤ N) denoting the i-th element of S. Each element of S is unique.</p>

### 출력 

 <p>Output consists of T lines, each describes the solution for each case with the same order as in input.</p>

<p>Each case consists of a single line with the format “Case #i: S”, where i represents the case number and S represents the total length of LIS of every consecutive subsequence of S.</p>

