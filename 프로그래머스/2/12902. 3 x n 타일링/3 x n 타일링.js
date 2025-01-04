// n: 가로의 길이, 1 <= n <= 5_000
function solution(n) {
    const arr = [0, 3, 11];
    
    if (n % 2 === 1) {
        return 0;
    } else if (n < 3) {
        return arr[n];
    }
    
    for (let i = 3; i <= n / 2; i++) {
        arr.push(arr[i - 1] * 3 + 2);
        
        for (let j = 1; j < i - 1; j++) {
            arr[i] += arr[j] * 2;
        }
        
        arr[i] %= 1_000_000_007;
    }
    
    return arr[n / 2];
}