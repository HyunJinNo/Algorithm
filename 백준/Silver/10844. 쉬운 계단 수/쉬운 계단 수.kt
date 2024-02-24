import java.io.*

lateinit var cache: Array<IntArray>

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 1 <= n <= 100
    br.close()
    cache = Array<IntArray>(n + 1) { IntArray(10) { -1 } }

    var result = 0
    for (num in 1..9) {
        result += solve(n, num)
        result %= 1000000000
    }
    bw.write("$result")
    bw.flush()
    bw.close()
}

fun solve(length: Int, num: Int): Int {
    if (length == 1) {
        cache[length][num] = 1
        return cache[length][num]
    } else if (cache[length][num] != -1) {
        return cache[length][num]
    }

    var result = 0

    when (num) {
        0 -> result += solve(length - 1, 1) % 1000000000
        9 -> result += solve(length - 1, 8) % 1000000000
        else -> {
            result += solve(length - 1, num - 1) % 1000000000
            result += solve(length - 1, num + 1) % 1000000000
        }
    }
    cache[length][num] = (result % 1000000000)
    return cache[length][num]
}