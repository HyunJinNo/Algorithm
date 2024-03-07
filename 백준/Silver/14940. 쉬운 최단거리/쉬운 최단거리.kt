import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))

    // n: 세로의 크기, 2 <= n <= 1,000
    // m: 가로의 크기, 2 <= m <= 1,000
    val (n, m) = br.readLine().split(" ").map { it.toInt() }
    val arr = Array<IntArray>(n) { IntArray(m) }
    for (i in arr.indices) {
        arr[i] = br.readLine().split(" ").map { it.toInt() }.toIntArray()
    }
    br.close()

    val answer = Array<IntArray>(n) { IntArray(m) { -1 } }
    val visited = Array<BooleanArray>(n) { BooleanArray(m) { false } }
    val deque = ArrayDeque<Triple<Int, Int, Int>>() // [row, col, distance]

    for (i in arr.indices) {
        for (j in arr[i].indices) {
            if (arr[i][j] == 2) {
                answer[i][j] = 0
                visited[i][j] = true
                deque.addLast(Triple(i, j, 0))
            } else if (arr[i][j] == 0) {
                answer[i][j] = 0
            }
        }
    }

    while (deque.isNotEmpty()) {
        val data = deque.removeFirst()
        val row = data.first
        val col = data.second
        val distance = data.third

        if (row - 1 >= 0 && !visited[row - 1][col]) {
            visited[row - 1][col] = true
            if (arr[row - 1][col] == 1) {
                answer[row - 1][col] = distance + 1
                deque.addLast(Triple(row - 1, col, distance + 1))
            } else {
                answer[row - 1][col] = 0
            }
        }
        if (row + 1 < n && !visited[row + 1][col]) {
            visited[row + 1][col] = true
            if (arr[row + 1][col] == 1) {
                answer[row + 1][col] = distance + 1
                deque.addLast(Triple(row + 1, col, distance + 1))
            } else {
                answer[row + 1][col] = 0
            }
        }
        if (col - 1 >= 0 && !visited[row][col - 1]) {
            visited[row][col - 1] = true
            if (arr[row][col - 1] == 1) {
                answer[row][col - 1] = distance + 1
                deque.addLast(Triple(row, col - 1, distance + 1))
            } else {
                answer[row][col - 1] = 0
            }
        }
        if (col + 1 < m && !visited[row][col + 1]) {
            visited[row][col + 1] = true
            if (arr[row][col + 1] == 1) {
                answer[row][col + 1] = distance + 1
                deque.addLast(Triple(row, col + 1, distance + 1))
            } else {
                answer[row][col + 1] = 0
            }
        }
    }

    for (i in answer.indices) {
        for (j in answer[i].indices) {
            bw.write("${answer[i][j]} ")
        }
        bw.write("\n")
    }
    bw.flush()
    bw.close()
}