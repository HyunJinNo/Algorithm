import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 거스름돈 액수, 1 <= n <= 100,000
    br.close()

    var answer = -1
    for (i in (n / 5) downTo 0) {
        val money = 5 * i
        if ((n - money) % 2 == 0) {
            answer = i + (n - money) / 2
            break
        }
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}