import java.io.*

lateinit var graph: Array<MutableSet<Int>>
lateinit var visited: BooleanArray
var answer = 0

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 1 <= n <= 100
    val t = br.readLine().toInt()
    graph = Array<MutableSet<Int>>(n + 1) { mutableSetOf<Int>() }
    visited = BooleanArray(n + 1) { false }
    visited[1] = true

    for (iter in 1..t) {
        val temp = br.readLine().split(" ").map { it.toInt() }
        val src = temp[0]
        val dest = temp[1]
        graph[src].add(dest)
        graph[dest].add(src)
    }

    solve(1)

    bw.write("$answer")
    br.close()
    bw.flush()
    bw.close()
}

fun solve(src: Int) {
    val destinations = graph[src]

    for (dest in destinations) {
        if (!visited[dest]) {
            answer++
            visited[dest] = true
            solve(dest)
        }
    }
}