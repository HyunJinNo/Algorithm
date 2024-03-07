import java.io.*

var x = 0L
var y = 0L
var winRate = 0L

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toLong() }
    x = temp[0] // 게임 횟수, 1 <= x <= 1,000,000,000
    y = temp[1] // 이긴 게임, 0 <= y <= x
    winRate = y * 100 / x
    br.close()

    if (winRate >= 99L) {
        bw.write("-1")
    } else {
        bw.write("${solve()}")
    }

    bw.flush()
    bw.close()
}

fun check(num: Int): Boolean {
    return (y + num) * 100L / (x + num) >= winRate + 1L
}

fun solve(): Int {
    var left = -1
    var right = 1000000000

    while (left <= right) {
        val mid = (left + right) / 2
        if (check(mid)) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return left
}