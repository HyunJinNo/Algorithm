import java.io.*
import kotlin.math.min

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    var temp = br.readLine().split(" ").map { it.toInt() }

    val n = temp[0] // 컴퓨터의 수
    val m = temp[1] // 회선 정보 수
    val graph = mutableMapOf<Int, MutableList<Pair<Int, Int>>>().apply {
        for (i in 1..n) {
            this[i] = mutableListOf<Pair<Int, Int>>() // [dest, time]
        }
    }

    for (iter in 1..m) {
        temp = br.readLine().split(" ").map { it.toInt() }
        graph[temp[0]]!!.add(Pair(temp[1], temp[2]))
        graph[temp[1]]!!.add(Pair(temp[0], temp[2]))
    }
    br.close()

    val result = mutableListOf<Pair<Int, Int>>()
    val visited = BooleanArray(n + 1) { false }
    val time = IntArray(n + 1) { 987654321 }
    val src = IntArray(n + 1) { 1 }
    visited[1] = true
    time[1] = 0

    for (pair in graph[1]!!) {
        time[pair.first] = pair.second
    }

    for (iter in 1..(n - 1)) {
        var index = 0
        var minTime = 987654321

        for (i in 1..n) {
            if (!visited[i] && minTime > time[i]) {
                index = i
                minTime = time[i]
            }
        }

        visited[index] = true
        result.add(Pair(src[index], index))

        for (pair in graph[index]!!) {
            if (time[pair.first] > time[index] + pair.second) {
                time[pair.first] = min(time[pair.first], time[index] + pair.second)
                src[pair.first] = index
            }
        }
    }

    bw.write("${result.size}\n")
    result.forEach {
        bw.write("${it.first} ${it.second}\n")
    }
    bw.flush()
    bw.close()
}