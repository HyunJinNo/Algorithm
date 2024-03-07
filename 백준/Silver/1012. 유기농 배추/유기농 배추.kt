import java.io.*

lateinit var arr: Array<BooleanArray>
var answer = 0

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val t = br.readLine().toInt()

    for (iter1 in 1..t) {
        // m: 배추밭의 가로 길이, 1 <= M <= 50
        // n: 배추밭의 세로 길이, 1 <= n <= 50
        // k: 배추가 심어져 있는 위치의 개수, 1 <= k <= 2500
        val (m, n, k) = br.readLine().split(" ").map { it.toInt() }
        arr = Array<BooleanArray>(n) { BooleanArray(m) { false } }
        answer = 0

        for (iter2 in 1..k) {
            val (x, y) = br.readLine().split(" ").map { it.toInt() }
            arr[y][x] = true
        }

        for (i in arr.indices) {
            for (j in arr[i].indices) {
                if (arr[i][j]) {
                    answer++
                    arr[i][j] = false
                    solve(i, j)
                }
            }
        }

        bw.write("${answer}\n")
    }
    br.close()
    bw.flush()
    bw.close()
}

fun solve(row: Int, col: Int) {
    if (row - 1 >= 0 && arr[row - 1][col]) {
        arr[row - 1][col] = false
        solve(row - 1, col)
    }
    if (row + 1 < arr.size && arr[row + 1][col]) {
        arr[row + 1][col] = false
        solve(row + 1, col)
    }
    if (col - 1 >= 0 && arr[row][col - 1]) {
        arr[row][col - 1] = false
        solve(row, col - 1)
    }
    if (col + 1 < arr[0].size && arr[row][col + 1]) {
        arr[row][col + 1] = false
        solve(row, col + 1)
    }
}