// enroll: 각 판매원의 이름을 담은 배열, 1 <= enroll.length <= 10_000
// referral: 각 판매원을 다단계 조직에 참여시킨 다른 판매원의 이름을 담은 배열, referral.length === enroll.length
// seller: 판매량 집계 데이터의 판매원 이름을 나열한 배열
// amount: 판매량 집계 데이터의 판매 수량을 나열한 배열
function solution(enroll, referral, seller, amount) {
    const length1 = enroll.length; // 1 <= length1 <= 10_000
    const length2 = seller.length; // 1 <= length2 <= 100_000
    const graph = new Map();
    const result = new Map();
    
    for (let i = 0; i < length1; i++) {
        graph.set(enroll[i], referral[i]);
        result.set(enroll[i], 0);
    }
    
    for (let i = 0; i < length2; i++) {
        let target = seller[i];
        let money = 100 * amount[i];
        
        while (true) {
            if (money === 0) {
                break;
            }
            
            if (graph.get(target) !== "-") {
                result.set(target, result.get(target) + Math.ceil(money * 0.9));
                target = graph.get(target);
                money = Math.floor(money * 0.1);
            } else {
                result.set(target, result.get(target) + Math.ceil(money * 0.9));
                break;
            }
        }
    }
    
    const answer = [];
    
    for (let i = 0; i < length1; i++) {
        answer.push(result.get(enroll[i]));
    }
    
    return answer;
}