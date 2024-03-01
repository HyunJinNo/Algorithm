import java.io.*
import kotlin.math.max

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 1 <= n <= 100,000
    val list = mutableListOf<Int>().apply {
        for (iter in 1..n) {
            add(br.readLine().toInt()) // 1 ~ 10,000
        }
    }
    br.close()

    var answer = 0
    list.sortDescending()
    for (i in list.indices) {
        answer = max(answer, list[i] * (i + 1))
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}