// cap: 트럭에 실을 수 있는 재활용 택배 상자의 최대 개수, 1 <= cap <= 50
// n: 배달할 집의 개수, 1 <= n <= 100_000
// deliveries: 각 집에 배달할 재활용 택배 상자의 개수, 0 <= deliveries[i] <= 50, deliveries.length === n
// pickups: 각 집에서 수거할 빈 재활용 택배 상자의 개수, 0 <= pickups[i] <= 50, pickups.length === n
function solution(cap, n, deliveries, pickups) {
    let answer = 0;
    const stack1 = []; // [distance, count]
    const stack2 = []; // [distance, count]
    
    for (let i = 0; i < n; i++) {
        if (deliveries[i] !== 0) {
            stack1.push([i + 1, deliveries[i]]);            
        }
        
        if (pickups[i] !== 0) {
            stack2.push([i + 1, pickups[i]]);
        }
    }
    
    while (stack1.length > 0 || stack2.length > 0) {
        let count = cap;
        let maxDistance = 0;
        
        while (count > 0 && stack1.length !== 0) {
            maxDistance = Math.max(maxDistance, stack1[stack1.length - 1][0]);
            
            if (stack1[stack1.length - 1][1] > count) {
                stack1[stack1.length - 1][1] -= count;
                count = 0;
            } else {
                count -= stack1[stack1.length - 1][1];
                stack1.pop();
            }
        }
        
        count = cap;
        
        while (count > 0 && stack2.length !== 0) {
            maxDistance = Math.max(maxDistance, stack2[stack2.length - 1][0]);
            
            if (stack2[stack2.length - 1][1] > count) {
                stack2[stack2.length - 1][1] -= count;
                count = 0;
            } else {
                count -= stack2[stack2.length - 1][1];
                stack2.pop();
            }
        }
        
        answer += maxDistance * 2;
    }
    
    return answer;
}