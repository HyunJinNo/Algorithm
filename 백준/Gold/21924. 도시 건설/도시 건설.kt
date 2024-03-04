import java.io.*
import java.util.PriorityQueue

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    var temp = br.readLine().split(" ").map { it.toInt() }

    val n = temp[0] // 건물의 개수, 3 <= n <= 100,000
    val m = temp[1] // 도로의 개수, 2 <= m <= min(n * (n - 1) / 2, 500,000)
    val graph = mutableMapOf<Int, MutableList<Pair<Int, Int>>>().apply {// [src][dest, cost]
        for (i in 1..n) {
            this[i] = mutableListOf<Pair<Int, Int>>() // [dest, cost]
        }
    }

    var sum = 0L
    for (iter in 1..m) {
        temp = br.readLine().split(" ").map { it.toInt() }
        sum += temp[2]
        graph[temp[0]]!!.add(Pair(temp[1], temp[2]))
        graph[temp[1]]!!.add(Pair(temp[0], temp[2]))
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
    var total = 0L
    visited[0] = true
    visited[1] = true

    for (data in graph[1]!!) {
        edges.add(data)
    }

    Loop@for (iter in 1..(n - 1)) {
        while (true) {
            if (edges.isEmpty()) {
                total = sum + 1L
                break@Loop
            }

            val data = edges.poll()
            if (!visited[data.first]) {
                visited[data.first] = true
                total += data.second
                for (pair in graph[data.first]!!) {
                    if (!visited[pair.first]) {
                        edges.add(pair)
                    }
                }
                break
            }
        }
    }

    bw.write("${sum - total}")
    bw.flush()
    bw.close()
}