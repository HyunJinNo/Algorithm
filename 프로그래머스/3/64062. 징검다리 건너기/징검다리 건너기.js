// stones: 디딤돌에 적힌 숫자가 순서대로 담긴 배열
// 1 <= stones.length <= 200_000
// 1 <= stones[i] <= 200_000_000

// k: 디딤돌의 최대 칸수
// 1 <= k <= stones.length
function solution(stones, k) {
    const length = stones.length;
    let start = 1;
    let end = 200_000_000;
    
    while (start + 1 < end) {
        const mid = Math.floor((start + end) / 2);
        let count = k;
        let flag = true;
        
        for (let i = 0; i < length; i++) {
            if (stones[i] <= mid) {
                count--;
                if (count === 0) {
                    flag = false;
                    break;
                }
            } else {
                count = k;
            }
        }
        
        if (flag) {
            start = mid;
        } else {
            end = mid;
        }
    }
    
    return end;
}