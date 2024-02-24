class Solution {
    var answer = 0
    lateinit var board: Array<IntArray>
    
    fun solution(n: Int): Int {
        answer = 0
        board = Array<IntArray>(n) { IntArray(n) { 0 } }
        solve(0)
        
        return answer
    }
    
    fun solve(row: Int) {
        if (row == board.size) {
            answer++
            return
        }

        for (col in board[0].indices) {
            if (board[row][col] == 0) {
                cover(row, col, 1)
                solve(row + 1)
                cover(row, col, -1)
            }
        }
    }

    // [num = 1]: 체스판 위에 퀸 하나 두기
    // [num = -1]: 체스판 위에 있는 퀸 하나 빼기
    fun cover(row: Int, col: Int, num: Int) {
        // 가로
        for (j in board[0].indices) {
            board[row][j] += num
        }

        // 세로
        for (i in board.indices) {
            board[i][col] += num
        }

        var i = row - 1
        var j = col - 1
        while (i >= 0 && j >= 0) {
            board[i--][j--] += num
        }

        i = row - 1
        j = col + 1
        while (i >= 0 && j < board[0].size) {
            board[i--][j++] += num
        }

        i = row + 1
        j = col - 1
        while (i < board.size && j >= 0) {
            board[i++][j--] += num
        }

        i = row + 1
        j = col + 1
        while (i < board.size && j < board[0].size) {
            board[i++][j++] += num
        }
    }
}