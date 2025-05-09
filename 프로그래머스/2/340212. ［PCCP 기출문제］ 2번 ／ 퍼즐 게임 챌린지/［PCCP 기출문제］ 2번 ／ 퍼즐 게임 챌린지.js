// 1 <= limit <= 10^15
// diffs[0] = 1
// 1 <= diffs[i] <= 100_000
// 1 <= times[i] <= 10_000
function solution(diffs, times, limit) {
    const n = diffs.length; // 1 <= n <= 300_000
    let start = 1;
    let end = 100_000;
    
    const check = (level) => {
        let time = times[0];
        
        for (let i = 1; i < n; i++) {
            if (diffs[i] <= level) {
                time += times[i];
            } else {
                time += (times[i - 1] + times[i]) * (diffs[i] - level) + times[i];
            }
        }
        
        return time <= limit;
    }
    
    while (start < end) {
        const mid = Math.floor((start + end) / 2);
        
        if (check(mid)) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return end;
}