import java.io.*
import kotlin.math.min
import kotlin.math.max

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))

    // 1 <= n <= 1,000
    // 1 <= m <= 10,000
    // 1 <= x <= n
    val (n, m, x) = br.readLine().split(" ").map { it.toInt() }
    val graph = mutableMapOf<Int, MutableList<Pair<Int, Int>>>()
    val reversedGraph = mutableMapOf<Int, MutableList<Pair<Int, Int>>>()
    for (num in 1..n) {
        graph[num] = mutableListOf<Pair<Int, Int>>()
        reversedGraph[num] = mutableListOf<Pair<Int, Int>>()
    }

    for (iter in 1..m) {
        val data = br.readLine().split(" ").map { it.toInt() }
        graph[data[0]]!!.add(Pair(data[1], data[2]))
        reversedGraph[data[1]]!!.add(Pair(data[0], data[2]))
    }
    br.close()

    val time1 = solve(graph, n, x)
    val time2 = solve(reversedGraph, n, x)
    var answer = 0
    for (i in 1..n) {
        answer = max(answer, time1[i] + time2[i])
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}

fun solve(graph: MutableMap<Int, MutableList<Pair<Int, Int>>>, n: Int, x: Int): IntArray {
    val time = IntArray(n + 1) { 987654321 }
    val visited = BooleanArray(n + 1) { false }
    time[0] = 0
    time[x] = 0
    visited[0] = true
    visited[x] = true
    for (data in graph[x]!!) {
        time[data.first] = data.second
    }

    for (iter in 1..(n - 1)) {
        var index = 0
        var minTime = 987654321
        for (i in 1..n) {
            if (!visited[i] && minTime > time[i]) {
                index = i
                minTime = time[i]
            }
        }

        visited[index] = true
        for (data in graph[index]!!) {
            time[data.first] = min(time[data.first], time[index] + data.second)
        }
    }

    return time
}