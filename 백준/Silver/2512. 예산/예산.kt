import java.io.*
import kotlin.math.min

var n = 0
lateinit var list: List<Int>
var m = 0

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    n = br.readLine().toInt() // 지방의 수, 3 <= n <= 10,000
    list = br.readLine().split(" ").map { it.toInt() }.sorted() // 각 지방의 예산요청, 1 <= list[i] <= 100,000
    m = br.readLine().toInt() // 총 예산, 1 <= m <= 1,000,000,000
    br.close()

    bw.write("${solve()}")
    bw.flush()
    bw.close()
}

fun check(num: Int): Boolean {
    var sum = 0
    list.forEach {
        sum += min(it, num)
    }
    return (sum <= m)
}

fun solve(): Int {
    var left = 1
    var right = list[n - 1]

    while (left <= right) {
        val mid = (left + right) / 2
        if (check(mid)) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return right
}