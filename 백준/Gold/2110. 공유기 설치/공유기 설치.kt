import java.io.*

var n = 0
var c = 0
lateinit var arr: IntArray

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))

    val temp = br.readLine().split(" ").map { it.toInt() }
    n = temp[0] // 집의 개수, 2 <= n <= 200,000
    c = temp[1] // 설치해야 할 공유기의 개수, 2 <= c <= n
    arr = IntArray(n)
    for (i in arr.indices) {
        arr[i] = br.readLine().toInt() // 0 <= arr[i] <= 1,000,000,000
    }
    arr.sort()

    br.close()
    bw.write("${solve()}")
    bw.flush()
    bw.close()
}

fun solve(): Int {
    var left = 1
    var right = arr.last()

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

/**
 * gap 간격 이상으로 공유기를 설치했을 때 공유기를 c개 이상 설치할 수 있는지 여부를 반환한다.
 * @param gap 설치 간격
 * @return 가능한지 여부
 */
fun check(gap: Int): Boolean {
    var limit = 0
    var installed = 0

    for (location in arr) {
        if (limit <= location) {
            installed++
            limit = location + gap
        }
    }

    return (installed >= c)
}