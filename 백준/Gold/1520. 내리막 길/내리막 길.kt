import java.io.*

var m = 0
var n = 0
lateinit var arr: Array<IntArray>
lateinit var cache: Array<IntArray>

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toInt() }

    // 1 <= m, n <= 500
    m = temp[0]
    n = temp[1]
    arr = Array<IntArray>(m) { IntArray(n) }
    cache = Array<IntArray>(m) { IntArray(n) { -1 } }

    for (i in arr.indices) {
        arr[i] = br.readLine().split(" ").map { it.toInt() }.toIntArray()
    }
    br.close()

    bw.write("${solve(0, 0)}\n")
    bw.flush()
    bw.close()
}

fun solve(row: Int, col: Int): Int {
    if (row == m - 1 && col == n - 1) {
        return 1
    } else if (cache[row][col] != -1) {
        return cache[row][col]
    }

    var result = 0
    if (row > 0 && arr[row][col] > arr[row - 1][col]) {
        result += solve(row - 1, col)
    }
    if (row < m - 1 && arr[row][col] > arr[row + 1][col]) {
        result += solve(row + 1, col)
    }
    if (col > 0 && arr[row][col] > arr[row][col - 1]) {
        result += solve(row, col - 1)
    }
    if (col < n - 1 && arr[row][col] > arr[row][col + 1]) {
        result += solve(row, col + 1)
    }

    cache[row][col] = result
    return result
}