// health: 최대 체력, 1 <= health <= 1_000
// attacks[i]: [공격 시간, 피해량] 
// 1 <= attacks.length <= 100
function solution(bandage, health, attacks) {
    // t: 시전 시간, 1 <= t <= 50
    // x: 초당 회복량, 1 <= x <= 100
    // y: 추가 회복량, 1 <= y <= 100
    const [t, x, y] = bandage;
    
    let answer = health;
    let attacksLen = attacks.length;
    let attackIndex = 0;
    let count = 0;
    
    for (let time = 1; time <= 1000; time++) {
        if (attackIndex >= attacksLen) {
            break;
        }
        
        if (time === attacks[attackIndex][0]) {
            if (answer <= attacks[attackIndex][1]) {
                answer = -1;
                break;
            } else {
                answer -= attacks[attackIndex][1];
                attackIndex++;
                count = 0;   
            }
        } else {
            answer += x;
            count++;
            if (count === t) {
                count = 0;
                answer += y;
            }
            
            answer = Math.min(health, answer);
        }
    }
    
    return answer;
}