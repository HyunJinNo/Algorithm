import java.io.*

val bw = BufferedWriter(OutputStreamWriter(System.out))
lateinit var arr: IntArray
lateinit var visited: BooleanArray
val list = mutableListOf<Int>()
val printed = mutableSetOf<String>()

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val temp = br.readLine().split(" ").map { it.toInt() }

    val n = temp[0]
    val m = temp[1]

    arr = br.readLine().split(" ").map { it.toInt() }.toIntArray().sortedArray()
    br.close()
    visited = BooleanArray(n) { false }

    solve(m)
    bw.flush()
    bw.close()
}

fun solve(depth: Int) {
    if (depth == 0) {
        val result = buildString {
            for (x in list) {
                append("$x ")
            }
            append("\n")
        }

        if (!printed.contains(result)) {
            bw.write(result)
            printed.add(result)
        }
        return
    }

    for (i in arr.indices) {
        if (!visited[i]) {
            visited[i] = true
            list.add(arr[i])
            solve(depth - 1)
            list.removeLast()
            visited[i] = false
        }
    }
}