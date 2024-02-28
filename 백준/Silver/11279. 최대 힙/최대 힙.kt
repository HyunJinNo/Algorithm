import java.io.*
import java.util.PriorityQueue

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 0 <= n <= 100,000
    val pq = PriorityQueue<Int>(reverseOrder())

    for (iter in 1..n) {
        val num = br.readLine().toInt() // 1 <= num <= 2^31 - 1
        if (num == 0) {
            bw.write("${pq.poll() ?: 0}\n")
        } else {
            pq.add(num)
        }
    }

    br.close()
    bw.flush()
    bw.close()
}