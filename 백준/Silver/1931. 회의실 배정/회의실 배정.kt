import java.io.*
import java.util.PriorityQueue

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 회의의 수, 1 <= n <= 100,000
    val pq = PriorityQueue<Pair<Int, Int>> {
        a, b -> when {
            a.second > b.second -> 1
            a.second < b.second -> -1
            else -> when {
                a.first > b.first -> 1
                a.first < b.first -> -1
                else -> 0
            }
        }
    }

    for (iter in 1..n) {
        val temp = br.readLine().split(" ").map { it.toInt() }
        pq.add(Pair(temp[0], temp[1]))
    }

    var answer = 1
    var time = pq.poll().second

    while (pq.isNotEmpty()) {
        val temp = pq.poll()
        if (temp.first >= time) {
            answer++
            time = temp.second
        }
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}