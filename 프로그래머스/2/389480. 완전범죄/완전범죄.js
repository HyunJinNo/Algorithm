// 1 <= info.length <= 40
// 1 <= n <= 120
// 1 <= m <= 120
function solution(info, n, m) {
    const length = info.length;
    const cache = Array.from({ length: length }, () => Array.from({ length: n + 1 }, () => Array(m + 1).fill(-1)));
    
    const findAnswer = (index, a, b) => {
        if (index === length) {
            return a;
        } else if (cache[index][a][b] !== -1) {
            return cache[index][a][b];
        }
        
        let result = 121;
        
        if (a + info[index][0] < n) {
            result = Math.min(result, findAnswer(index + 1, a + info[index][0], b));
        }
        
        if (b + info[index][1] < m) {
            result = Math.min(result, findAnswer(index + 1, a, b + info[index][1]));
        }
        
        cache[index][a][b] = result;
        return result;
    }
    
    const answer = findAnswer(0, 0, 0);
    return answer === 121 ? -1 : answer;
}