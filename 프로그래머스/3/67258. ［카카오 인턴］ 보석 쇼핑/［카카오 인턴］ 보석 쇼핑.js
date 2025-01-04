// 1 <= gems.length <= 100_000
// 1 <= gems[i].length <= 10
function solution(gems) {
    const gemsLength = gems.length;
    let start = 0;
    let end = 0;
    const map = new Map();
    let count = 0;    
    let length = 100_001;
    const answer = [1, gemsLength];

    for (let i = 0; i < gemsLength; i++) {
        if (!map.has(gems[i])) {
            map.set(gems[i], 0);
            count++;    
        }
    }

    while (end < gemsLength) {
        map.set(gems[end], map.get(gems[end]) + 1);
        if (map.get(gems[end]) === 1) {
            count--;
        } else {
            while (map.get(gems[start]) > 1) {
                map.set(gems[start], map.get(gems[start]) - 1);
                start++;
            }
        }

        end++;
        if (count === 0 && end - start < length) {
            length = end - start;
            answer[0] = start + 1;
            answer[1] = end;
        }
    }

    return answer;
}