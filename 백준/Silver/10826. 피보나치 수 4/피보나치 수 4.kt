import java.io.*
import java.math.BigInteger

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 0 <= n <= 10,000
    br.close()

    if (n == 0) {
        bw.write("0")
        bw.flush()
        bw.close()
        return
    }
    
    val fib = Array<BigInteger>(n + 1) { BigInteger("0") }
    fib[0] = BigInteger("0")
    fib[1] = BigInteger("1")
    for (i in 2..n) {
        fib[i] = fib[i - 1].add(fib[i - 2])
    }

    bw.write("${fib[n]}")
    bw.flush()
    bw.close()
}