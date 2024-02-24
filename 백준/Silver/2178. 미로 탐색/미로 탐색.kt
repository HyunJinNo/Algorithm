import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toInt() }

    // 2 <= n, m <= 100
    val n = temp[0]
    val m = temp[1]
    val maze = Array<String>(n) { "" }
    val visited = Array<BooleanArray>(n) { BooleanArray(m) { false } }
    val deque = ArrayDeque<Triple<Int, Int, Int>>() // [row, col, num]

    for (i in maze.indices) {
        maze[i] = br.readLine()
    }
    br.close()

    deque.addLast(Triple(0, 0, 1))
    visited[0][0] = true
    while (deque.isNotEmpty()) {
        val triple = deque.removeFirst()
        val row = triple.first
        val col = triple.second
        val num = triple.third

        if (row == n - 1 && col == m - 1) {
            bw.write("$num")
            break
        }

        if (row > 0 && !visited[row - 1][col] && maze[row - 1][col] == '1') {
            visited[row - 1][col] = true
            deque.addLast(Triple(row - 1, col, num + 1))
        }
        if (row < n - 1 && !visited[row + 1][col] && maze[row + 1][col] == '1') {
            visited[row + 1][col] = true
            deque.addLast(Triple(row + 1, col, num + 1))
        }
        if (col > 0 && !visited[row][col - 1] && maze[row][col - 1] == '1') {
            visited[row][col - 1] = true
            deque.addLast(Triple(row, col - 1, num + 1))
        }
        if (col < m - 1 && !visited[row][col + 1] && maze[row][col + 1] == '1') {
            visited[row][col + 1] = true
            deque.addLast(Triple(row, col + 1, num + 1))
        }
    }
    bw.flush()
    bw.close()
}