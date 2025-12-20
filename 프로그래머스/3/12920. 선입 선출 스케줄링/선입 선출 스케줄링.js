// n: 처리해야 할 작업의 개수, 1 <= n <= 50_000
// cores: 각 코어의 처리 시간이 담긴 배열, 1 <= cores[i] <= 10_000
// 2 <= cores.length <= 10_000
function solution(n, cores) {
    const length = cores.length; // 2 <= length <= 10_000   
    let left = 0;
    let right = 10_000 * 25_000;
    
    const check = (totalTime) => {
        return cores.reduce((total, current) => total + Math.ceil(totalTime / current), 0) >= n;
    };
    
    while (left + 1 < right) {
        const mid = Math.floor((left + right) / 2);
        
        if (check(mid)) {
            right = mid;
        } else {
            left = mid;
        }
    }
    
    let answer = 0;
    let count = cores.reduce((total, current) => total + Math.ceil(right / current), 0);
    
    for (let i = length - 1; i >= 0; i--) {
        if (Math.ceil(right / cores[i]) !== Math.ceil(left / cores[i])) {
            if (count === n) {
                answer = i + 1;
                break;
            } else {
                count--;
            }
        }
    }
    
    return answer;
}