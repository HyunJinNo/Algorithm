// 1 <= begin <= end <= 1_000_000_000
// end - begin <= 5_000
function solution(begin, end) {
    const answer = Array(end - begin + 1).fill(0);
    const n = Math.ceil(Math.sqrt(end));
    
    for (let num = begin; num <= end; num++) {
        if (num === 1) {
            answer[num - begin] = 0;
        } else {
            let result = 1;
            
            for (let divisor = 2; divisor * divisor <= num; divisor++) {
                if (num % divisor === 0) {
                    if (num / divisor <= 10_000_000) {
                        result = num / divisor;
                        break;
                    } else {
                        result = Math.max(result, divisor);
                    }
                }
            }
            
            answer[num - begin] = result;   
        }
    }
    
    return answer;
}