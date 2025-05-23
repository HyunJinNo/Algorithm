import java.io.BufferedReader
import java.io.FileInputStream
import java.io.InputStreamReader
import java.util.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val n = br.readLine().toInt()
    val arr = mutableListOf<Pair<Int, Int>>()

    for (i in 0 until n) {
        val (p, d) = br.readLine().split(" ").map { it.toInt() }
        arr.add(Pair(p, d))
    }

    arr.sortByDescending { it.second }
    val pq = PriorityQueue<Pair<Int, Int>> { a, b -> b.first - a.first }
    var index = 0
    var answer = 0

    for (day in n downTo 1) {
        while (index < n && arr[index].second >= day) {
            pq.offer(arr[index++])
        }

        if (!pq.isEmpty()) {
            answer += pq.poll().first
        }
    }

    print(answer)
}