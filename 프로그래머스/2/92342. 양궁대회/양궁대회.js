// n: 화살의 개수, 1 <= n <= 10
// info.length === 11
function solution(n, info) {
    let diff = 0;
    let answer = [-1];
    const arr = Array(11).fill(0);
    
    const check = () => {
        let score1 = 0; // 라이언의 점수
        let score2 = 0; // 어피치의 점수
        
        for (let i = 0; i <= 10; i++) {
            if (arr[i] === 0 && info[i] === 0) {
                continue;
            } else if (arr[i] > info[i]) {
                score1 += 10 - i;
            } else {
                score2 += 10 - i;
            }
        }
        
        if (score1 > score2 && diff < score1 - score2) {
            diff = score1 - score2;
            answer = [...arr];
        }
    }
    
    const findAnswer = (index, left) => {
        if (index === 0) {
            arr[0] = left;
            check();
            return;
        }
        
        for (let count = left; count >= 0; count--) {
            arr[index] = count;
            findAnswer(index - 1, left - count);
            arr[index] = 0;
        }
    }
    
    findAnswer(10, n);
    
    return answer;
}