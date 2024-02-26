import java.io.*

fun main() {

    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toInt() }
    val n = temp[0] // 1 <= n <= 1,000
    val m = temp[1] // 1 <= m < = 1,000
    val arr = Array<String>(n) { "" }
    val visited = Array<Array<BooleanArray>>(n) { Array<BooleanArray>(m) { BooleanArray(2) { false } } } // [row, col, chance]
    visited[0][0][1] = true

    for (i in arr.indices) {
        arr[i] = br.readLine()
    }
    br.close()

    val deque = ArrayDeque<IntArray>() // [row, col, move, chance]
    deque.addLast(intArrayOf(0, 0, 1, 1))
    var answer = -1

    while (deque.isNotEmpty()) {
        val data = deque.removeFirst()
        val row = data[0]
        val col = data[1]
        val move = data[2]
        val chance = data[3]

        if (row == n - 1 && col == m - 1) {
            answer = move
            break
        }

        if (row > 0) {
            if (arr[row - 1][col] == '0' && !visited[row - 1][col][chance]) {
                visited[row - 1][col][chance] = true
                deque.addLast(intArrayOf(row - 1, col, move + 1, chance))
            } else if (arr[row - 1][col] == '1' && chance == 1 && !visited[row - 1][col][0]) {
                visited[row - 1][col][0] = true
                deque.addLast(intArrayOf(row - 1, col, move + 1, 0))
            }
        }
        if (row < n - 1) {
            if (arr[row + 1][col] == '0' && !visited[row + 1][col][chance]) {
                visited[row + 1][col][chance] = true
                deque.addLast(intArrayOf(row + 1, col, move + 1, chance))
            } else if (arr[row + 1][col] == '1' && chance == 1 && !visited[row + 1][col][0]) {
                visited[row + 1][col][0] = true
                deque.addLast(intArrayOf(row + 1, col, move + 1, 0))
            }
        }
        if (col > 0) {
            if (arr[row][col - 1] == '0' && !visited[row][col - 1][chance]) {
                visited[row][col - 1][chance] = true
                deque.addLast(intArrayOf(row, col - 1, move + 1, chance))
            } else if (arr[row][col - 1] == '1' && chance == 1 && !visited[row][col - 1][0]) {
                visited[row][col - 1][0] = true
                deque.addLast(intArrayOf(row, col - 1, move + 1, 0))
            }
        }
        if (col < m - 1) {
            if (arr[row][col + 1] == '0' && !visited[row][col + 1][chance]) {
                visited[row][col + 1][chance] = true
                deque.addLast(intArrayOf(row, col + 1, move + 1, chance))
            } else if (arr[row][col + 1] == '1' && chance == 1 && !visited[row][col + 1][0]) {
                visited[row][col + 1][0] = true
                deque.addLast(intArrayOf(row, col + 1, move + 1, 0))
            }
        }
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}