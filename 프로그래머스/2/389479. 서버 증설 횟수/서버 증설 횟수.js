// players.length === 24
// 0 <= players[i] <= 1_000
// m: 최대 이용자의 수, 1 <= m <= 1_000
// k: 서버 한 대가 운영 가능한 시간, 1 <= k <= 24
function solution(players, m, k) {
    let answer = 0;
    let currentServer = 0;
    const arr = [];
    let arrLength = 0;
    let arrIndex = 0;
    
    for (let i = 0; i < 24; i++) {
        if (arrLength > arrIndex && arr[arrIndex].time === i) {
            currentServer -= arr[arrIndex++].count;
        }
        
        const neededServer = Math.floor(players[i] / m);
        
        if (neededServer > currentServer) {
            answer += (neededServer - currentServer);
            arr.push({ time: i + k, count: neededServer - currentServer });
            arrLength++;
            currentServer = neededServer;
        }
    }
    
    return answer;
}