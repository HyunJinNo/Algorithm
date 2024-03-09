import java.io.*
import kotlin.math.min

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 도시의 개수, 1 <= n <= 1,000
    val m = br.readLine().toInt() // 버스의 개수, 1 <= m <= 100,000
    val graph = mutableMapOf<Int, MutableList<Pair<Int, Int>>>().apply {
        for (city in 1..n) {
            this[city] = mutableListOf<Pair<Int, Int>>()
        }
    }

    for (iter in 1..m) {
        val (src, dest, cost) = br.readLine().split(" ").map { it.toInt() }
        if (src == dest) {
            graph[src]!!.add(Pair(dest, 0))
        } else {
            graph[src]!!.add(Pair(dest, cost))
        }
    }
    val (src, dest) = br.readLine().split(" ").map { it.toInt() }
    br.close()

    val costs = IntArray(n + 1) { 987654321 }
    val roots = IntArray(n + 1) { 0 }
    val visited = BooleanArray(n + 1) { false }
    visited[src] = true
    for (data in graph[src]!!) {
        costs[data.first] = min(costs[data.first], data.second)
        roots[data.first] = src
    }

    for (iter in 1..(n - 1)) {
        var index = 0
        var minCost = 987654321
        for (i in 1..n) {
            if (!visited[i] && minCost > costs[i]) {
                index = i
                minCost = costs[i]
            }
        }

        visited[index] = true
        if (index == dest) {
            break
        }

        for (data in graph[index]!!) {
            if (!visited[data.first] && costs[data.first] > costs[index] + data.second) {
                costs[data.first] = costs[index] + data.second
                roots[data.first] = index
            }
        }
    }

    val routes = mutableListOf<Int>()
    var city = dest
    while (city != src) {
        routes.add(city)
        city = roots[city]
    }
    routes.add(src)
    routes.reverse()

    bw.write("${costs[dest]}\n")
    bw.write("${routes.size}\n")
    routes.forEach {
        bw.write("$it ")
    }
    bw.flush()
    bw.close()
}