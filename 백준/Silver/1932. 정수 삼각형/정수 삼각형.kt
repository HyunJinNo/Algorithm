import java.io.*
import kotlin.math.max

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt()
    val arr = Array<IntArray>(n) { IntArray(n) { 0 } }

    for (i in arr.indices) {
        arr[i] = br.readLine().split(" ").map { it.toInt() }.toIntArray()
    }
    br.close()

    for (i in 1..(n - 1)) {
        for (j in arr[i].indices) {
            when (j) {
                0 -> arr[i][j] += arr[i - 1][j]
                i -> arr[i][j] += arr[i - 1][j - 1]
                else -> arr[i][j] += max(arr[i - 1][j - 1], arr[i - 1][j])
            }
        }
    }

    var answer = 0
    for (j in arr[n - 1].indices) {
        answer = max(answer, arr[n - 1][j])
    }
    bw.write("$answer")
    bw.flush()
    bw.close()
}