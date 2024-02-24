import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 5 <= n <= 200,000,000
    br.close()

    var before = 1
    var answer = 1
    for (i in 3..n) {
        val temp = answer
        answer += before
        answer %= 1000000007
        before = temp
    }

    bw.write("${answer} ${n - 2}")
    bw.flush()
    bw.close()
}