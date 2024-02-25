import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 1 <= n <= 45
    br.close()

    val fib = IntArray(n + 1)
    fib[0] = 0
    fib[1] = 1
    for (i in 2..n) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }

    bw.write("${fib[n]}")
    bw.flush()
    bw.close()
}