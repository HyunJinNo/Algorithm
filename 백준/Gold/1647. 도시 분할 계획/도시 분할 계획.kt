import java.io.*
import java.util.PriorityQueue
import kotlin.math.max

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))

    // n: 집의 개수 (2 <= n <= 100,000)
    // m: 길의 개수 (1 <= m <= 1,000,000)
    val (n, m)  = br.readLine().split(" ").map { it.toInt() }
    val graph = mutableMapOf<Int, MutableList<Pair<Int, Int>>>().apply {// [src][dest, cost]
        for (i in 1..n) {
            this[i] = mutableListOf<Pair<Int, Int>>() // [dest, cost]
        }
    }

    for (iter in 1..m) {
        val data = br.readLine().split(" ").map { it.toInt() }
        graph[data[0]]!!.add(Pair(data[1], data[2]))
        graph[data[1]]!!.add(Pair(data[0], data[2]))
    }
    br.close()

    val visited = BooleanArray(n + 1) { false }
    val edges = PriorityQueue<Pair<Int, Int>> { a, b ->
        when {
            a.second > b.second -> 1
            a.second < b.second -> -1
            else -> 0
        }
    }
    val costs = mutableListOf<Int>()
    visited[0] = true
    visited[1] = true

    for (data in graph[1]!!) {
        edges.add(data)
    }

    for (iter in 1..(n - 1)) {
        while (true) {
            val data = edges.poll()
            if (!visited[data.first]) {
                visited[data.first] = true
                costs.add(data.second)
                for (pair in graph[data.first]!!) {
                    if (!visited[pair.first]) {
                        edges.add(pair)
                    }
                }
                break
            }
        }
    }

    var answer = 0
    var maxCost = -1
    costs.forEach {
        answer += it
        maxCost = max(maxCost, it)
    }

    bw.write("${answer - maxCost}")
    bw.flush()
    bw.close()
}