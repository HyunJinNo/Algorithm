// 1 <= scores.length <= 100_000
// 0 <= a = scores[i][0] <= 100_000
// 0 <= b = scores[i][1] <= 100_000
function solution(scores) {
    const length = scores.length;
    const arr = [];
    
    for (let i = 0; i < length; i++) {
        arr.push([i, scores[i][0], scores[i][1]]);
    }
    
    arr.sort((a, b) => {
        if (a[1] !== b[1]) {
            return b[1] - a[1];
        } else {
            return a[2] - b[2];
        }
    });
    
    const ranking = [[arr[0][0], arr[0][1] + arr[0][2]]]; // [player, totalScore]
    let b = arr[0][2];
    
    for (let i = 1; i < length; i++) {
        if (b <= arr[i][2]) {
            b = arr[i][2];
            ranking.push([arr[i][0], arr[i][1] + arr[i][2]]);
        }
    }
    
    ranking.sort((a, b) => b[1] - a[1]);
    let answer = -1;
    const length2 = ranking.length;
    let totalScore = ranking[0][1];
    let rank = 1;
    
    for (let i = 0; i < length2; i++) {
        if (totalScore > ranking[i][1]) {
            totalScore = ranking[i][1];
            rank = i + 1;
        }
        
        if (ranking[i][0] === 0) {
            answer = rank;
            break;
        }
    }
    
    return answer;
}