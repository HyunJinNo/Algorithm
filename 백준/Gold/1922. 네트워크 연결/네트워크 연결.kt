import java.io.*
import kotlin.math.min

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 컴퓨터의 수, 1 <= n <= 1,000
    val m = br.readLine().toInt() // 연결할 수 있는 선의 수, 1 <= m <= 100,000
    val graph = mutableMapOf<Int, MutableList<Pair<Int, Int>>>().apply {
        for (computer in 1..n) {
            this[computer] = mutableListOf<Pair<Int, Int>>()
        }
    }

    for (iter in 1..m) {
        val data = br.readLine().split(" ").map { it.toInt() }
        graph[data[0]]!!.add(Pair(data[1], data[2]))
        graph[data[1]]!!.add(Pair(data[0], data[2]))
    }
    br.close()

    val visited = BooleanArray(n + 1) { false }
    visited[1] = true
    val dist = IntArray(n + 1) { 987654321 }
    dist[1] = 0

    for (pair in graph[1]!!) {
        dist[pair.first] = min(dist[pair.first], pair.second)
    }

    var answer = 0

    for (iter in 1..(n - 1)) {
        var index = 0
        var minCost = 987654321

        for (i in 1..n) {
            if (!visited[i] && minCost > dist[i]) {
                index = i
                minCost = dist[i]
            }
        }

        visited[index] = true
        answer += dist[index]

        for (pair in graph[index]!!) {
            dist[pair.first] = min(dist[pair.first], pair.second)
        }
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}