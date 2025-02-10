import java.io.*
import java.util.PriorityQueue

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))

    val n = br.readLine().toInt() // 1 <= N <= 1500
    val pq = PriorityQueue<Int>()

    br.readLine().split(" ").map { it.toInt() }.forEach {
        pq.add(it)
    }

    for (i in 2..n) {
        br.readLine().split(" ").map { it.toInt() }.forEach {
            pq.add(it)
            pq.poll()
        }
    }

    bw.write("${pq.poll()}")
    bw.flush()
    bw.close()
}