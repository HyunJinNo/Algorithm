import java.io.*
import java.util.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))

    // n: 헛간의 개수, 1 <= n <= 50,000
    // m: 소들의 길 개수, 1 <= m <= 50,000
    val (n, m) = br.readLine().split(" ").map { it.toInt() }
    val graph = Array<MutableList<Pair<Int, Int>>>(n) { mutableListOf<Pair<Int, Int>>() }

    for (iter in 1..m) {
        val (a, b, c) = br.readLine().split(" ").map { it.toInt() }
        graph[a - 1].add(Pair(b - 1, c))
        graph[b - 1].add(Pair(a - 1, c))
    }
    br.close()

    val costs = IntArray(n) { 987654321 }
    val visited = BooleanArray(n) { false }
    val pq = PriorityQueue<Pair<Int, Int>> { a, b ->
        when {
            a.second > b.second -> 1
            a.second < b.second -> -1
            else -> 0
        }
    }
    costs[0] = 0
    visited[0] = true
    for (data in graph[0]) {
        if (costs[data.first] > data.second) {
            costs[data.first] = data.second
            pq.offer(data)
        }
    }

    for (iter in 1..(n - 1)) {
        var index = -1
        while (pq.isNotEmpty()) {
            val data = pq.poll()
            if (!visited[data.first]) {
                index = data.first
                break
            }
        }

        visited[index] = true
        if (index == n - 1) {
            break
        }

        for (data in graph[index]) {
            if (!visited[data.first] && costs[data.first] > costs[index] + data.second) {
                costs[data.first] = costs[index] + data.second
                pq.offer(Pair(data.first, costs[index] + data.second))
            }
        }
    }

    bw.write("${costs[n - 1]}")
    bw.flush()
    bw.close()
}