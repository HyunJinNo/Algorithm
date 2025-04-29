function solution(storage, requests) {
    const n = storage.length; // 세로의 길이, 2 <= n <= 50
    const m = storage[0].length; // 가로의 길이, 2 <= m <= 50
    const arr = storage.map((str) => str.split(""));
    const accessible = Array.from({ length: n }, () => Array(m).fill(false));
    let answer = n * m;
    
    for (let row = 0; row < n; row++) {
        accessible[row][0] = true;
        accessible[row][m - 1] = true;
    }
    
    for (let col = 0; col < m; col++) {
        accessible[0][col] = true;
        accessible[n - 1][col] = true;
    }
    
    const findAccessible = () => {
        const visited = Array.from({ length: n }, () => Array(m).fill(false));
        
        const checkAccessible = (row, col) => {
            if (arr[row][col] !== "") {
                accessible[row][col] = true;
                return;
            }
            
            if (row - 1 >= 0 && !visited[row - 1][col]) {
                visited[row - 1][col] = true;
                checkAccessible(row - 1, col);
            }
            
            if (row + 1 < n && !visited[row + 1][col]) {
                visited[row + 1][col] = true;
                checkAccessible(row + 1, col);
            }
            
            if (col - 1 >= 0 && !visited[row][col - 1]) {
                visited[row][col - 1] = true;
                checkAccessible(row, col - 1);
            }
            
            if (col + 1 < m && !visited[row][col + 1]) {
                visited[row][col + 1] = true;
                checkAccessible(row, col + 1);
            }
        }
        
        for (let row = 0; row < n; row++) {
            if (!visited[row][0]) {
                visited[row][0] = true;
                checkAccessible(row, 0);
            }
            
            if (!visited[row][m - 1]) {
                visited[row][m - 1] = true;
                checkAccessible(row, m - 1);
            }
        }
        
        for (let col = 0; col < m; col++) {
            if (!visited[0][col]) {
                visited[0][col] = true;
                checkAccessible(0, col);
            }
            
            if (!visited[n - 1][col]) {
                visited[n - 1][col] = true;
                checkAccessible(n - 1, col);
            }
        }
    }
    
    requests.forEach((request) => {
        if (request.length === 2) {
            for (let row = 0; row < n; row++) {
                for (let col = 0; col < m; col++) {
                    if (arr[row][col] === request[0]) {
                        arr[row][col] = "";
                        answer--;
                    }
                }
            }
        } else {
            for (let row = 0; row < n; row++) {
                for (let col = 0; col < m; col++) {
                    if (arr[row][col] === request && accessible[row][col]) {
                        arr[row][col] = "";
                        answer--;
                    }
                }
            }
        }
        
        findAccessible();
    });
    
    return answer;
}