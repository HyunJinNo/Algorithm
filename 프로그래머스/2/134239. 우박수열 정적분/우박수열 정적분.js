// k: 우박수의 초항, 2 <= k <= 10_000
// ranges: 정적분을 구하는 구간들의 목록, 1 <= ranges.length <= 10_000
function solution(k, ranges) {
    let n = 0;
    const points = [k];
    while (k !== 1) {
        n++;
        if (k % 2 === 0) {
            points.push(k / 2);
            k /= 2;
        } else {
            points.push(k * 3 + 1);
            k = k * 3 + 1;
        }
    }
    
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push((points[i] + points[i + 1]) / 2);
    }
    
    const sumArr = [arr[0]];
    for (let i = 1; i < n; i++) {
        sumArr.push(arr[i] + sumArr[i - 1]);
    }
    
    const answer = [];
    ranges.forEach((range) => {
        const start = range[0];
        const end = n + range[1];
        
        if (start > end) {
            answer.push(-1);
        } else if (start === end) {
            answer.push(0);
        } else if (start === 0) { 
            answer.push(sumArr[end - 1]);
        } else {
            answer.push(sumArr[end - 1] - sumArr[start - 1]);
        }
    });
    
    return answer;
}