import java.io.*
import kotlin.math.min

lateinit var bino: Array<IntArray> // [n + m][m]

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toInt() }
    br.close()

    val n = temp[0] // a의 개수, 1 <= n <= 100
    val m = temp[1] // z의 개수, 1 <= m <= 100
    val k = temp[2] // 1 <= k <= 1,000,000,000

    prepare(n, m)
    if (k > bino[n + m][m]) {
        bw.write("-1")
    } else {
        bw.write(solve(n, m, k, 0))
    }

    bw.flush()
    bw.close()
}

fun prepare(n: Int, m: Int) {
    bino = Array<IntArray>(n + m + 1) { IntArray(n + m + 1) }
    for (i in 1..(n + m)) {
        bino[i][0] = 1
        bino[i][i] = 1
        for (j in 1..(i - 1)) {
            bino[i][j] = min(1000000000, bino[i - 1][j - 1] + bino[i - 1][j])
        }
    }
}

fun solve(n: Int, m: Int, k: Int, skip: Int): String {
    if (n == 0) {
        return buildString {
            for (iter in 1..m) {
                append("z")
            }
        }
    } else if (m == 0) {
        return buildString {
            for (iter in 1..n) {
                append("a")
            }
        }
    } else {
        return if (k <= skip + bino[n + m - 1][m]) {
            "a" + solve(n - 1, m, k, skip)
        } else {
            "z" + solve(n, m - 1, k, skip + bino[n + m - 1][m])
        }
    }
}