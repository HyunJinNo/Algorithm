import java.io.*
import java.util.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 사람의 수, 1 <= n <= 1,000
    val pq = PriorityQueue<Int>().apply {
        br.readLine().split(" ").map { it.toInt() }.forEach {
            add(it)
        }
    }
    br.close()

    var answer = 0
    var time = 0

    while (pq.isNotEmpty()) {
        time += pq.poll()
        answer += time
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}