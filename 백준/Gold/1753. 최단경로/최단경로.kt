import java.io.*
import java.util.PriorityQueue
import kotlin.math.min

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    var temp = br.readLine().split(" ").map { it.toInt() }
    val v = temp[0] // 정점의 개수, 1 <= v <= 20,000
    val e = temp[1] // 간선의 개수, 1 <= e <= 300,000
    val k = br.readLine().toInt() // 시작 정점의 번호, 1 <= k <= v
    val graph = mutableMapOf<Int, PriorityQueue<Pair<Int, Int>>>().apply {
        for (src in 1..v) {
            this[src] = PriorityQueue<Pair<Int, Int>> { a, b ->
                when {
                    a.second > b.second -> 1
                    a.second < b.second -> -1
                    else -> 0
                }
            }
        }
    }

    for (i in 1..e) {
        temp = br.readLine().split(" ").map { it.toInt() }
        val src = temp[0]
        val dest = temp[1]
        val w = temp[2] // 1 <= w <= 10
        graph[src]!!.add(Pair(dest, w))
    }

    val visited = BooleanArray(v + 1) { false }
    visited[k] = true
    val dist = IntArray(v + 1) { 987654321 }
    dist[k] = 0
    while (graph[k]!!.isNotEmpty()) {
        val pair = graph[k]!!.poll()
        dist[pair.first] = min(dist[pair.first], pair.second)
    }

    while (true) {
        var index = 0
        var minCost = 987654321

        for (dest in 1..v) {
            if (!visited[dest] && minCost > dist[dest]) {
                index = dest
                minCost = dist[dest]
            }
        }

        if (minCost == 987654321) {
            break
        }

        visited[index] = true
        while (graph[index]!!.isNotEmpty()) {
            val pair = graph[index]!!.poll()
            dist[pair.first] = min(dist[pair.first], dist[index] + pair.second)
        }
    }

    for (dest in 1..v) {
        if (dist[dest] == 987654321) {
            bw.write("INF\n")
        } else {
            bw.write("${dist[dest]}\n")
        }
    }

    bw.flush()
    bw.close()
}