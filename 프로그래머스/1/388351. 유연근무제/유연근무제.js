// schedules: 출근 희망 시각을 담은 1차원 정수 배열
// timelogs: 일주일 동안 출근한 시각을 담은 2차원 배열
// startday: 이벤트를 시작한 요일을 의미하는 정수
// 1 <= schedules.length === n <= 1_000
function solution(schedules, timelogs, startday) {
    let answer = 0;
    const n = schedules.length; // 직원의 수, 1 <= n <= 1_000
    
    for (let i = 0; i < n; i++) {
        const deadline = getTime(schedules[i]) + 10;
        let flag = true;
        
        for (let j = 0; j < 7; j++) {
            if ([6, 7, 13, 14].includes(startday + j)) {
                continue;
            }
            
            if (getTime(timelogs[i][j]) > deadline) {
                flag = false;
                break;
            }
        }
        
        if (flag) {
            answer++;
        }
    }
    
    return answer;
}

function getTime(timelog) {
    return Math.floor(timelog / 100) * 60 + (timelog % 100);
}