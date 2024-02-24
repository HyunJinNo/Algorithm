def solution(n, s):
    if n > s:
        return [-1]
    else:
        answer = [s // n] * n
        for i in range(s - sum(answer)):
            answer[-(i + 1)] += 1
        return answer