// n: 택배 상자의 개수, 2 <= n <= 100
// w: 가로로 놓는 상자의 개수, 1 <= w <= 10
// num: 꺼내려는 택배 상자의 번호, 1<= num <= n
function solution(n, w, num) {
    let answer = 0;
    const arr = Array.from({ length: Math.ceil(n / w) }, () => Array(w).fill(0));
    let row = 0;
    let col = 0;
    let direction = "right";
    let targetRow = 0;
    let targetCol = 0;
    
    for (let i = 1; i <= n; i++) {
        arr[row][col] = i;
        
        if (i === num) {
            targetRow = row;
            targetCol = col;
        }
        
        if (direction === "right") {
            if (col === w - 1) {
                row++;
                direction = "left";
            } else {
                col++;
            }
        } else {
            if (col === 0) {
                row++;
                direction = "right";
            } else {
                col--;
            }
        }
    }
    
    for (let i = targetRow; i < Math.ceil(n / w); i++) {
        if (arr[targetRow][targetCol] === 0) {
            break;
        }
        answer++;
        targetRow++;
    }
    
    return answer;
}