import java.io.*

var n = 0
var m = 0
lateinit var trees: List<Int>

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toInt() }

    n = temp[0] // 나무의 수, 1 <= n <= 1,000,000
    m = temp[1] // 가져가려고 하는 나무의 길이, 1 <= m <= 2,000,000,000
    trees = br.readLine().split(" ").map { it.toInt() }
    br.close()

    bw.write("${solve()}")
    bw.flush()
    bw.close()
}

fun decision(height: Int): Boolean {
    var result = 0L
    for (tree in trees) {
        if (tree > height) {
            result += (tree - height)
            if (result >= m) {
                return true
            }
        }
    }
    return false
}

fun solve(): Int {
    var left = 0
    var right = 1000000000

    while (left <= right) {
        val mid = (left + right) / 2
        if (decision(mid)) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return right
}