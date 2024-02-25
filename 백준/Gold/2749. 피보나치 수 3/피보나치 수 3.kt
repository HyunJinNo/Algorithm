import java.io.*

/**
 * 피사노 주기(Pisano Period)를 활용한 피보나치 수 구하기 문제
 */
fun main() {   
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toLong() // 1 <= n <= 1,000,000,000,000,000,000
    br.close()

    val p = 1500000 // (= 15 x 10^5)
    val fib = IntArray(p)
    fib[0] = 0
    fib[1] = 1
    for (i in 2..(p - 1)) {
        fib[i] = fib[i - 1] + fib[i - 2]
        fib[i] %= 1000000
    }

    bw.write("${fib[(n % p).toInt()]}")
    bw.flush()
    bw.close()
}