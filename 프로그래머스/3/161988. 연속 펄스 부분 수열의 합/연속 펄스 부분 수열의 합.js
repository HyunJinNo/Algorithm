// 1 <= sequence.length <= 500_000
// -100_000 < sequence[i] <= 100_000
function solution(sequence) {
    const length = sequence.length;
    let sum = 0;
    let min = 0;
    let max = 0;
    
    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            sum += sequence[i];
        } else {
            sum -= sequence[i]; 
        }
        
        min = Math.min(min, sum);
        max = Math.max(max, sum);
    }
    
    return Math.abs(max - min);
}