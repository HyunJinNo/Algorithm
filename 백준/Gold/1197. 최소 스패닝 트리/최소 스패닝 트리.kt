import java.io.*
import kotlin.math.min

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    var temp = br.readLine().split(" ").map { it.toInt() }
    val v = temp[0] // 정점의 개수, 1 <= v <= 10,000
    val e = temp[1] // 간선의 개수, 1 <= e <= 100,000
    val edges = mutableMapOf<Int, MutableList<Pair<Int, Int>>>().apply {
        for (src in 1..v) {
            this[src] = mutableListOf<Pair<Int, Int>>()
        }
    }

    for (iter in 1..e) {
        temp = br.readLine().split(" ").map { it.toInt() }
        edges[temp[0]]!!.add(Pair(temp[1], temp[2]))
        edges[temp[1]]!!.add(Pair(temp[0], temp[2]))
    }
    br.close()

    val visited = BooleanArray(v + 1) { false }
    visited[1] = true
    val distance = IntArray(v + 1) { 987654321 }
    distance[1] = 0
    for (pair in edges[1]!!) {
        distance[pair.first] = min(distance[pair.first], pair.second)
    }

    var answer = 0

    for (iter in 1..(v - 1)) {
        var index = 0
        var minCost = 987654321

        for (dest in 1..v) {
            if (!visited[dest] && minCost > distance[dest]) {
                index = dest
                minCost = distance[dest]
            }
        }

        answer += minCost
        visited[index] = true
        
        for (pair in edges[index]!!) {
            distance[pair.first] = min(distance[pair.first], pair.second)
        }
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}