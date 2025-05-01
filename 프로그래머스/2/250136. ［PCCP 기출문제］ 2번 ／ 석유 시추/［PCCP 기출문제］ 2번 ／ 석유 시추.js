function solution(land) {
    const n = land.length; // 땅의 세로길이, 1 <= n <= 500
    const m = land[0].length; // 땅의 가로길이, 1 <= m <= 500
    const arr = Array.from({ length: n }, () => Array(m).fill(0));
    let key = 1;
    let area = 0;
    const areaMap = new Map();
    
    const findArea = (i, j) => {
        const stack = [[i, j]];
        let size = 1;
        
        while (size > 0) {
            const [row, col] = stack.pop();
            size--;
            
            if (row - 1 >= 0 && land[row - 1][col] === 1 && arr[row - 1][col] === 0) {
                arr[row - 1][col] = key;
                area++;
                stack.push([row - 1, col]);
                size++;
            }

            if (row + 1 < n && land[row + 1][col] === 1 && arr[row + 1][col] === 0) {
                arr[row + 1][col] = key;
                area++;
                stack.push([row + 1, col]);
                size++;
            }

            if (col - 1 >= 0 && land[row][col - 1] === 1 && arr[row][col - 1] === 0) {
                arr[row][col - 1] = key;
                area++;
                stack.push([row, col - 1]);
                size++;
            }

            if (col + 1 < m && land[row][col + 1] === 1 && arr[row][col + 1] === 0) {
                arr[row][col + 1] = key;
                area++;
                stack.push([row, col + 1]);
                size++;
            }   
        }
    }
    
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < m; col++) {
            if (land[row][col] === 1 && arr[row][col] === 0) {
                arr[row][col] = key;
                area++;
                findArea(row, col);
                
                areaMap.set(key, area);
                key++;
                area = 0;
            }
        }
    }
    
    let answer = 0;
    
    for (let col = 0; col < m; col++) {
        const keySet = new Set();
        let result = 0;
        
        for (let row = 0; row < n; row++) {
            if (arr[row][col] !== 0 && !keySet.has(arr[row][col])) {
                result += areaMap.get(arr[row][col]);
                keySet.add(arr[row][col]);
            }
        }
        
        answer = Math.max(answer, result);
    }
    
    return answer;
}