import java.io.*
import kotlin.math.min

var n = 0
var k = 0

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    n = br.readLine().toInt() // 배열의 크기, 1 <= n <= 100,000
    k = br.readLine().toInt() // 1 <= k <= min(1,000,000,000, n * n)
    br.close()

    bw.write("${solve()}")
    bw.flush()
    bw.close()
}

fun decision(num: Long): Boolean {
    var result = 0L
    for (i in 1..n) {
        result += min(n.toLong(), num / i)
    }
    return (result >= k)
}

fun solve(): Long {
    var left = 1L
    var right = 10000000000L

    while (left <= right) {
        val mid = (left + right) / 2
        if (decision(mid)) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return left
}