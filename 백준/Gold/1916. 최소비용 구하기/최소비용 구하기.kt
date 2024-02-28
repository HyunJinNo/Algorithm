import java.io.*
import kotlin.math.min

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 도시의 개수, 1 <= n <= 1,000
    val m = br.readLine().toInt() // 버스의 개수, 1 <= m <= 100,000
    val dist = Array<IntArray>(n + 1) { IntArray(n + 1) { 987654321 } }

    for (i in 1..m) {
        val temp = br.readLine().split(" ").map { it.toInt() }
        val src = temp[0]
        val dest = temp[1]
        val cost = temp[2]
        dist[src][dest] = min(dist[src][dest], cost)
    }

    val temp = br.readLine().split(" ").map { it.toInt() }
    val src = temp[0]
    val dest = temp[1]
    br.close()

    val visited = BooleanArray(n + 1) { false }
    dist[src][src] = 0
    visited[src] = true

    if (src == dest) {
        bw.write("0")
        bw.flush()
        bw.close()
        return
    }

    while (true) {
        var index = 0
        var minCost = 987654321

        for (i in 1..n) {
            if (!visited[i] && dist[src][i] < minCost) {
                index = i
                minCost = dist[src][i]
            }
        }

        visited[index] = true
        for (i in 1..n) {
            dist[src][i] = min(dist[src][i], dist[src][index] + dist[index][i])
        }

        if (index == dest) {
            bw.write("${dist[src][dest]}")
            break
        }
    }

    bw.flush()
    bw.close()
}