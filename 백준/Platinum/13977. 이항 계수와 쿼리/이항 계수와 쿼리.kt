import java.io.*

const val p = 1000000007

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val t = br.readLine().toInt() // 1 <= t <= 100,000

    val factorial = LongArray(4000001) { 0 }
    factorial[0] = 1L
    factorial[1] = 1L
    for (i in 2..4000000) {
        factorial[i] = (i * factorial[i - 1]) % p
    }

    for (iter in 1..t) {
        // 1 <= n <= 4,000,000
        // 0 <= k <= n
        val (n, k) = br.readLine().split(" ").map { it.toInt() }
        val result = factorial[n] * expdiv(factorial[k] * factorial[n - k] % p, p - 2) % p
        bw.write("${result}\n")
    }

    br.close()
    bw.flush()
    bw.close()
}

fun expdiv(n: Long, e: Int): Long {
    return when (e) {
        0 -> 1
        1 -> n
        else -> {
            val temp = expdiv(n, e / 2)
            if (e % 2 == 0) (temp * temp) % p else (((n * temp) % p) * temp) % p
        }
    }
}