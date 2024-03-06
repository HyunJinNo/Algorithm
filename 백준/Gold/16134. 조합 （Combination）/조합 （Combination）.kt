import java.io.*

const val p = 1000000007

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))

    // 0 <= r <= n <= 1,000,000
    val (n, r) = br.readLine().split(" ").map { it.toInt() }
    br.close()

    val factorial = LongArray(n + 1) { 0 }
    factorial[0] = 1L
    factorial[1] = 1L
    for (i in 2..n) {
        factorial[i] = (i * factorial[i - 1]) % p
    }

    val result = factorial[n] * expdiv(factorial[r] * factorial[n - r] % p, p - 2) % p

    bw.write("$result")
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