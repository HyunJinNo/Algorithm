// n: 거슬러 줘야 하는 금액, 1 <= n <= 100_000
// money: 돈의 종류
// 1 <= money.length <= 100
function solution(n, money) {
    const arr = Array(n + 1).fill(0);
    arr[0] = 1;
    
    money.forEach((value) => {
        for (let x = value; x <= n; x++) {
            arr[x] += arr[x - value];
        }
    })
    
    return arr[n] % 1_000_000_007;
}