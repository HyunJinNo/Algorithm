# [Silver IV] Course Scheduling - 4126 

[문제 링크](https://www.acmicpc.net/problem/4126) 

### 성능 요약

메모리: 14700 KB, 시간: 252 ms

### 분류

자료 구조, 해시를 사용한 집합과 맵, 트리를 사용한 집합과 맵

### 제출 일자

2024년 6월 17일 13:20:13

### 문제 설명

<p>It is a difficult job to schedule all of the courses in a university to satisfy students' choices with a minimum of conflicts. The task is made all the more difficult when some students don't pre-enroll, or pre-enroll multiple times because they forget that they already did it.</p>

### 입력 

 <p>The first line of input contains an integer 0 < n <= 100000, the number of student course requests. Each of the next n lines contains three strings separated by spaces: a student's first and last name, and the course that the student wishes to take. You may assume that each name is a string of at least one and at most 20 upper-case letters, and that a course is a string of at least one and at most 10 upper-case letters and digits. If a student requests a given course more than once, only the first such request should be considered. You may assume that no two students have both their first and last names the same.</p>

### 출력 

 <p>For each requested course, output a line containing the course, a space, and the number of students who requested the course. Output the courses sorted in lexicographical order (with digits sorted before letters).</p>

