import java.io.*
import kotlin.math.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val n = br.readLine().toInt() // 별의 개수, 1 <= n <= 100
    val points = mutableListOf<Pair<Double, Double>>().apply {
        for (iter in 1..n) {
            val (x, y) = br.readLine().split(" ").map { it.toDouble() }
            add(Pair(x, y))
        }
    }
    br.close()

    val dist = Array<DoubleArray>(n) { DoubleArray(n) { 0.0 } }
    for (i in points.indices) {
        for (j in (i + 1)..(n - 1)) {
            val p1 = points[i]
            val p2 = points[j]
            val temp = sqrt((p2.first - p1.first).pow(2) + (p2.second - p1.second).pow(2))
            dist[i][j] = temp
            dist[j][i] = temp
        }
    }

    var result = 0.0
    val visited = BooleanArray(n) { false }
    visited[0] = true
    val distance = DoubleArray(n)
    for (i in distance.indices) {
        distance[i] = dist[0][i]
    }

    for (iter in 1..(n - 1)) {
        var index = 0
        var minDist = Double.MAX_VALUE
        for (i in distance.indices) {
            if (!visited[i] && minDist > distance[i]) {
                index = i
                minDist = distance[i]
            }
        }

        visited[index] = true
        result += minDist

        for (i in distance.indices) {
            distance[i] = min(distance[i], dist[index][i])
        }
    }

    System.out.printf("%.2f\n", result)
}