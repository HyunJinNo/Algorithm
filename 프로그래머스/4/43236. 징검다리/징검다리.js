// 1 <= distance <= 1_000_000_000
// 1 <= n <= rocks.length
function solution(distance, rocks, n) {
    let answer = 0;
    let start = 1;
    let end = distance;
    const length = rocks.length;
    rocks.sort((a, b) => a - b);
    
    if (n === length) {
        return distance;
    }
    
    while (start + 1 < end) {
        const mid = Math.floor((start + end) / 2);
        let count = 0;
        let before = 0;
        
        for (let i = 0; i < length; i++) {
            if (rocks[i] - before < mid) {
                count++;
            } else {
                before = rocks[i];
            }
        }
        
        if (distance - before < mid) {
            count++;
        }
        
        if (count > n) {
            end = mid;
        } else {
            start = mid;
        }
    }
    
    return start;
}