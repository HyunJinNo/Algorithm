// 3 <= board.length <= 100
function solution(board) {
    let answer = -1;
    const width = board[0].length;
    const height = board.length;
    let startRow = 0;
    let startCol = 0;
    let targetRow = 0;
    let targetCol = 0;
    
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (board[i][j] === "R") {
                startRow = i;
                startCol = j;
            } else if (board[i][j] === "G") {
                targetRow = i;
                targetCol = j;
            }
        }
    }
    
    let index = 0;
    const visited = Array.from({ length: height }, () => Array(width).fill(false));
    const queue = [];
    let size = 0;
    visited[startRow][startCol] = true;
    queue.push({ row: startRow, col: startCol, count: 0 });
    size++;
    
    while (index < size) {
        const { row, col, count } = queue[index++];
        
        if (row === targetRow && col === targetCol) {
            answer = count;
            break;
        }
        
        let i = row - 1;
        while (i >= 0 && board[i][col] !== "D") {
            i--;
        }
        
        if (!visited[i + 1][col]) {
            visited[i + 1][col] = true;
            queue.push({ row: i + 1, col: col, count: count + 1 });
            size++;
        }
        
        i = row + 1;
        while (i < height && board[i][col] !== "D") {
            i++;
        }
        
        if (!visited[i - 1][col]) {
            visited[i - 1][col] = true;
            queue.push({ row: i - 1, col: col, count: count + 1 });
            size++;
        }
        
        i = col - 1;
        while (i >= 0 && board[row][i] !== "D") {
            i--;
        }
        
        if (!visited[row][i + 1]) {
            visited[row][i + 1] = true;
            queue.push({ row: row, col: i + 1, count: count + 1 });
            size++;
        }
        
        i = col + 1;
        while (i < width && board[row][i] !== "D") {
            i++;
        }
        
        if (!visited[row][i - 1]) {
            visited[row][i - 1] = true;
            queue.push({ row: row, col: i - 1, count: count + 1 });
            size++;
        }
    }
    
    return answer;
}