import java.io.*
import kotlin.math.max

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toInt() }

    val m = temp[0] // 가로 칸의 수, 2 <= m <= 100
    val n = temp[1] // 세로 칸의 수, 2 <= n <= 100
    val h = temp[2] // 높이, 1 <= h <= 100
    val arr = Array<Array<IntArray>>(h) { Array<IntArray>(n) { IntArray(m) } } // [height, row, col]
    for (height in arr.indices) {
        for (row in arr[0].indices) {
            arr[height][row] = br.readLine().split(" ").map { it.toInt() }.toIntArray()
        }
    }
    br.close()

    var answer = 0
    var left = 0
    val deque = ArrayDeque<IntArray>() // [height, row, col, day]
    for (height in arr.indices) {
        for (row in arr[0].indices) {
            for (col in arr[0][0].indices) {
                when (arr[height][row][col]) {
                    1 -> deque.addLast(intArrayOf(height, row, col, 0))
                    0 -> left++
                    else -> {}
                }
            }
        }
    }

    while (deque.isNotEmpty()) {
        if (left == 0) {
            break
        }

        val data = deque.removeFirst()
        val height = data[0]
        val row = data[1]
        val col = data[2]
        val day = data[3]

        if (height - 1 >= 0 && arr[height - 1][row][col] == 0) {
            arr[height - 1][row][col] = 1
            left--
            deque.addLast(intArrayOf(height - 1, row, col, day + 1))
        }
        if (height + 1 < h && arr[height + 1][row][col] == 0) {
            arr[height + 1][row][col] = 1
            left--
            deque.addLast(intArrayOf(height + 1, row, col, day + 1))
        }
        if (row - 1 >= 0 && arr[height][row - 1][col] == 0) {
            arr[height][row - 1][col] = 1
            left--
            deque.addLast(intArrayOf(height, row - 1, col, day + 1))
        }
        if (row + 1 < n && arr[height][row + 1][col] == 0) {
            arr[height][row + 1][col] = 1
            left--
            deque.addLast(intArrayOf(height, row + 1, col, day + 1))
        }
        if (col - 1 >= 0 && arr[height][row][col - 1] == 0) {
            arr[height][row][col - 1] = 1
            left--
            deque.addLast(intArrayOf(height, row, col - 1, day + 1))
        }
        if (col + 1 < m && arr[height][row][col + 1] == 0) {
            arr[height][row][col + 1] = 1
            left--
            deque.addLast(intArrayOf(height, row, col + 1, day + 1))
        }
        answer = max(answer, day + 1)
    }

    if (left > 0) {
        bw.write("-1")
    } else {
        bw.write("$answer")
    }
    bw.flush()
    bw.close()
}