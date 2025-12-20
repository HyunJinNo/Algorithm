
function solution(points, routes) {
    const n = points.length; // 2 <= n <= 100
    const x = routes.length; // 로봇의 수, 2 <= x <= 100
    const robots = Array.from({ length: x }, () => []);
    
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < routes[i].length - 1; j++) {
            const [startRow, startCol] = points[routes[i][j] - 1];
            const [endRow, endCol] = points[routes[i][j + 1] - 1];
            
            if (startRow < endRow) {
                for (let row = startRow; row < endRow; row++) {
                    robots[i].push([row, startCol]);
                }
            } else if (startRow > endRow) {
                for (let row = startRow; row > endRow; row--) {
                    robots[i].push([row, startCol]);
                }
            }
            
            if (startCol < endCol) {
                for (let col = startCol; col < endCol; col++) {
                    robots[i].push([endRow, col]);
                }
            } else if (startCol > endCol) {
                for (let col = startCol; col > endCol; col--) {
                    robots[i].push([endRow, col]);
                }
            }
        }
        
        robots[i].push(points[routes[i][routes[i].length - 1] - 1]);   
    }
    
    
    const arr = Array.from({ length: 101 }, () => Array(101).fill(0));
    const robotsIndex = Array(x).fill(0);
    let count = x;
    let answer = 0;
    
    const check = () => {
        for (let row = 1; row <= 100; row++) {
            for (let col = 1; col <= 100; col++) {
                if (arr[row][col] >= 2) {
                    answer++;
                }
                arr[row][col] = 0;
            }
        }
    }
    
    while (count > 0) {
        for (let i = 0; i < x; i++) {
            if (robotsIndex[i] === robots[i].length) {
                count--;
            } else if (robotsIndex[i] < robots[i].length) {
                arr[robots[i][robotsIndex[i]][0]][robots[i][robotsIndex[i]][1]]++;
            }
            robotsIndex[i]++;
        }
        
        check();
    }
     
    return answer;
}