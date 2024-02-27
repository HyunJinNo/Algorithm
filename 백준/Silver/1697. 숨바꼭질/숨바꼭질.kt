import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toInt() }
    br.close()

    val n = temp[0] // 0 <= n <= 100,000
    val k = temp[1] // 0 <= k <= 100,000

    val deque = ArrayDeque<Pair<Int, Int>>() // [position, move]
    deque.addLast(Pair(n, 0))
    val visited = BooleanArray(100001) { false }
    var answer = 987654321

    while (deque.isNotEmpty()) {
        val pair = deque.removeFirst()
        val position = pair.first
        val move = pair.second

        if (position == k) {
            answer = move
            break
        } else {
            if (position - 1 >= 0 && !visited[position - 1]) {
                visited[position - 1] = true
                deque.addLast(Pair(position - 1, move + 1))
            }
            if (position + 1 <= 100000 && !visited[position + 1]) {
                visited[position + 1] = true
                deque.addLast(Pair(position + 1, move + 1))
            }
            if (position * 2 <= 100000 && !visited[position * 2]) {
                visited[position * 2] = true
                deque.addLast(Pair(position * 2, move + 1))
            }
        }
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}