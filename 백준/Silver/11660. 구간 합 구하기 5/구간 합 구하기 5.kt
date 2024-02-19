import java.util.*

fun main() {
    val sc = Scanner(System.`in`)
    val n = sc.nextInt() // 1 <= n <= 1024
    val m = sc.nextInt() // 1 <= m <= 100000
    val arr = Array<IntArray>(n + 1) { IntArray(n + 1) { 0 } }
    val sumArr = Array<IntArray>(n + 1) { IntArray(n + 1) { 0 } }

    for (i in 1..n) {
        var sum = 0
        for (j in 1..n) {
            arr[i][j] = sc.nextInt() // 1 <= arr[i][j] <= 1000
            sum += arr[i][j]
            sumArr[i][j] = sum
        }
    }

    for (i in 1..n) {
        for (j in 1..n) {
            sumArr[i][j] += sumArr[i - 1][j]
        }
    }

    val sb = StringBuilder()

    for (iter in 1..m) {
        val x1 = sc.nextInt()
        val y1 = sc.nextInt()
        val x2 = sc.nextInt()
        val y2 = sc.nextInt()

        val answer = sumArr[x2][y2] + sumArr[x1 - 1][y1 - 1] - sumArr[x1 - 1][y2] - sumArr[x2][y1 - 1]
        sb.append("${answer}\n")
    }

    print(sb.toString())
}