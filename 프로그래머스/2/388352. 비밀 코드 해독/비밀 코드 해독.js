// 10 <= n <= 30
function solution(n, q, ans) {
    const m = q.length; // 1 <= m <= 10
    const arr = Array(5).fill(0);
    let answer = 0;
    
    const check = () => {
        
    }
    
    const findAnswer = (index, start) => {
        if (index === 5) {
            let flag = true;
            
            for (let i = 0; i < m; i++) {
                let count = 0;
                
                for (let j = 0; j < 5; j++) {
                    for (let k = 0; k < 5; k++) {
                        if (q[i][j] === arr[k]) {
                            count++;
                            break;
                        }
                    }
                }
                
                if (count !== ans[i]) {
                    flag = false;
                    break;
                }
            }
            
            if (flag) {
                answer++;
            }
            return;
        }
        
        for (let x = start; x <= n; x++) {
            arr[index] = x;
            findAnswer(index + 1, x + 1);
        }
    }
    
    findAnswer(0, 1);
    
    return answer;
}