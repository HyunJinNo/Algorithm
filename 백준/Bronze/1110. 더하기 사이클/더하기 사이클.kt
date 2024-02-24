import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 0 <= n <= 99
    br.close()

    var num = n
    var temp: Int
    var answer = 0

    do {
        temp = (num % 10) + ((num / 10) % 10)
        num = (num % 10) * 10 + (temp % 10)
        answer++
    } while (num != n)

    bw.write("$answer")
    bw.flush()
    bw.close()
}