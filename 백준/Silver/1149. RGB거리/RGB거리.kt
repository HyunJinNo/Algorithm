import java.io.*
import kotlin.math.min

var n = 0
lateinit var cost: Array<IntArray>
lateinit var cache: Array<IntArray>

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    n = br.readLine().toInt() // 2 <= n <= 1000
    cost = Array<IntArray>(n) { IntArray(3) }
    cache = Array<IntArray>(n) { IntArray(3) { -1 } }

    for (i in cost.indices) {
        cost[i] = br.readLine().split(" ").map { it.toInt() }.toIntArray()
    }
    br.close()

    var result = solve(0, 0)
    result = min(result, solve(0, 1))
    result = min(result, solve(0, 2))
    bw.write("$result")
    bw.flush()
    bw.close()
}

fun solve(index: Int, color: Int): Int {
    if (index >= n) {
        return 0
    } else if (cache[index][color] != -1) {
        return cache[index][color]
    }

    var result = 987654321
    when (color) {
        0 -> {
            result = min(result, cost[index][color] + solve(index + 1, 1))
            result = min(result, cost[index][color] + solve(index + 1, 2))
        }
        1 -> {
            result = min(result, cost[index][color] + solve(index + 1, 0))
            result = min(result, cost[index][color] + solve(index + 1, 2))
        }
        2 -> {
            result = min(result, cost[index][color] + solve(index + 1, 0))
            result = min(result, cost[index][color] + solve(index + 1, 1))
        }
    }

    cache[index][color] = result
    return cache[index][color]
}