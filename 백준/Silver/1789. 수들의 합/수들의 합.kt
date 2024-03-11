import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val s = br.readLine().toLong() // 1 <= s <= 4,294,967,295
    br.close()

    var sum = 0L
    var num = 1L
    while (sum + num <= s) {
        sum += num
        num++
    }

    bw.write("${num - 1}")
    bw.flush()
    bw.close()
}