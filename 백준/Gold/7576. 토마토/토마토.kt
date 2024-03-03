import java.io.*
import kotlin.math.max

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toInt() }

    // 2 <= m, n <= 1,000
    val m = temp[0] // 가로 칸의 수
    val n = temp[1] // 세로 칸의 수
    val arr = Array<IntArray>(n) { IntArray(m) }
    for (i in arr.indices) {
        arr[i] = br.readLine().split(" ").map { it.toInt() }.toIntArray()
    }
    br.close()

    var answer = 0
    var left = 0
    val deque = ArrayDeque<Triple<Int, Int, Int>>() // [row, col, day]
    for (i in arr.indices) {
        for (j in arr[0].indices) {
            when (arr[i][j]) {
                1 -> deque.addLast(Triple(i, j, 0))
                0 -> left++
                else -> {}
            }
        }
    }

    while (deque.isNotEmpty()) {
        if (left == 0) {
            break
        }

        val triple = deque.removeFirst()
        val row = triple.first
        val col = triple.second
        val day = triple.third

        if (row - 1 >= 0 && arr[row - 1][col] == 0) {
            arr[row - 1][col] = 1
            left--
            deque.addLast(Triple(row - 1, col, day + 1))
        }
        if (row + 1 < n && arr[row + 1][col] == 0) {
            arr[row + 1][col] = 1
            left--
            deque.addLast(Triple(row + 1, col, day + 1))
        }
        if (col - 1 >= 0 && arr[row][col - 1] == 0) {
            arr[row][col - 1] = 1
            left--
            deque.addLast(Triple(row, col - 1, day + 1))
        }
        if (col + 1 < m && arr[row][col + 1] == 0) {
            arr[row][col + 1] = 1
            left--
            deque.addLast(Triple(row, col + 1, day + 1))
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