import java.io.*

var answer = 1
lateinit var board: Array<String>
lateinit var visited: Array<BooleanArray>
val alphabetVisited = BooleanArray(26) { false }

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toInt() }

    // 1 <= r, c <= 20
    val r = temp[0]
    val c = temp[1]
    board = Array<String>(r) { "" }
    visited = Array<BooleanArray>(r) { BooleanArray(c) { false } }
    for (i in board.indices) {
        board[i] = br.readLine()
    }

    alphabetVisited[board[0][0] - 'A'] = true
    solve(0, 0, 1)

    bw.write("$answer")
    bw.flush()
    bw.close()
}

fun solve(row: Int, col: Int, step: Int) {
    if (answer < step) {
        answer = step
    }
    
    if (row - 1 >= 0 && !visited[row - 1][col] && !alphabetVisited[board[row - 1][col] - 'A']) {
        visited[row - 1][col] = true
        alphabetVisited[board[row - 1][col] - 'A'] = true
        solve(row - 1, col, step + 1)
        visited[row - 1][col] = false
        alphabetVisited[board[row - 1][col] - 'A'] = false
    }
    if (row + 1 < board.size && !visited[row + 1][col] && !alphabetVisited[board[row + 1][col] - 'A']) {
        visited[row + 1][col] = true
        alphabetVisited[board[row + 1][col] - 'A'] = true
        solve(row + 1, col, step + 1)
        visited[row + 1][col] = false
        alphabetVisited[board[row + 1][col] - 'A'] = false
    }
    if (col - 1 >= 0 && !visited[row][col - 1] && !alphabetVisited[board[row][col - 1] - 'A']) {
        visited[row][col - 1] = true
        alphabetVisited[board[row][col - 1] - 'A'] = true
        solve(row, col - 1, step + 1)
        visited[row][col - 1] = false
        alphabetVisited[board[row][col - 1] - 'A'] = false
    }
    if (col + 1 < board[0].length && !visited[row][col + 1] && !alphabetVisited[board[row][col + 1] - 'A']) {
        visited[row][col + 1] = true
        alphabetVisited[board[row][col + 1] - 'A'] = true
        solve(row, col + 1, step + 1)
        visited[row][col + 1] = false
        alphabetVisited[board[row][col + 1] - 'A'] = false
    }
}