import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val n = br.readLine().toInt() // 1 <= n <= 100000
    val A = br.readLine().split(" ").map { it.toInt() }
    val B = br.readLine().split(" ").map { it.toInt() }
    val m = br.readLine().toInt() // 1 <= m <= 100000
    val C = br.readLine().split(" ").map { it.toInt() }

    val queuestack = mutableListOf<Int>().apply {
        for (i in 0 until n) {
            if (A[i] == 0) {
                add(B[i])
            }
        }
    }

    val result = buildString {
        if (m <= queuestack.size) {
            for (i in (queuestack.size - 1) downTo (queuestack.size - m)) {
                append("${queuestack[i]} ")
            }
        } else { // m > queuestack.size
            for (i in (queuestack.size - 1) downTo 0) {
                append("${queuestack[i]} ")
            }
            for (i in 0..(m - queuestack.size - 1)) {
                append("${C[i]} ")
            }
        }
    }
    print(result)
}