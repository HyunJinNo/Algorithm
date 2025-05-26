function solution(n) {
    const arr = Array(15).fill(0);
    arr[0] = 1;
    arr[1] = 1;
    arr[2] = 2;
    arr[3] = 5;
    
    for (let num = 4; num <= 14; num++) {
        for (let x = 0; x < num; x++) {
            arr[num] += arr[x] * arr[num - x - 1];
        }
    }
    
    return arr[n];
}