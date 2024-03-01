import java.io.*

var n = 0
var m = 0
lateinit var list: MutableList<Int>

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toInt() }

    n = temp[0] // 입국심사대 개수, 1 <= n <= 100,000
    m = temp[1] // 사람의 수, 1 <= m <= 1,000,000,000
    list = mutableListOf<Int>().apply {
        for (iter in 1..n) {
            val time = br.readLine().toInt() // 1 ~ 1,000,000,000
            add(time)
        }
    }
    br.close()

    bw.write("${solve()}")
    bw.flush()
    bw.close()
}

fun decision(num: Long): Boolean {
    var result = 0L
    for (time in list) {
        result += (num / time)
        if (result >= m) {
            return true
        }
    }
    return false
}

fun solve(): Long {
    var left = 0L
    var right = Long.MAX_VALUE

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