import java.io.*
import kotlin.math.min

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 도시의 개수, 2 <= n <= 100,000
    val distance = br.readLine().split(" ").map { it.toInt() } // 1 <= distance.sum() <= 1,000,000,000
    val cost = br.readLine().split(" ").map { it.toInt() } // 1 <= cost[i] <= 1,000,000,000
    br.close()

    var answer = 0L
    var minCost = Int.MAX_VALUE

    for (i in distance.indices) {
        minCost = min(minCost, cost[i])
        answer += (minCost * distance[i])
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}