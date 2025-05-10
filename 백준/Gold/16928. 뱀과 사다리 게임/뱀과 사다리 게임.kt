import java.io.BufferedReader
import java.io.FileInputStream
import java.io.InputStreamReader
import java.util.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val (N, M) = br.readLine().split(" ").map { it.toInt() }
    val graph = mutableMapOf<Int, Int>()

    for (i in 1..N) {
        val (x, y) = br.readLine().split(" ").map { it.toInt() }
        graph[x] = y
    }

    for (i in (N + 1)..(N + M)) {
        val (u, v) = br.readLine().split(" ").map { it.toInt() }
        graph[u] = v
    }

    var answer = 0
    val visited = BooleanArray(101) { false }
    visited[1] = true
    val deque = ArrayDeque<IntArray>() // [pos, count]
    deque.offerLast(intArrayOf(1, 0))

    while (!deque.isEmpty()) {
        val (pos, count) = deque.removeFirst()

        if (pos == 100) {
            answer = count
            break
        }

        for (num in 1..6) {
            if (pos + num <= 100 && !visited[pos + num]) {
                if (graph[pos + num] !== null) {
                    visited[graph[pos + num]!!] = true
                    deque.offerLast(intArrayOf(graph[pos + num]!!, count + 1))
                } else {
                    visited[pos + num] = true
                    deque.offerLast(intArrayOf(pos + num, count + 1))
                }
            }
        }
    }

    print(answer)
}