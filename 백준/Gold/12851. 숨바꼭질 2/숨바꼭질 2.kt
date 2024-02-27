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
    val visited = IntArray(100001) { -1 }
    visited[n] = 0
    var answer = 987654321
    var count = 0

    while (deque.isNotEmpty()) {
        val pair = deque.removeFirst()
        val position = pair.first
        val move = pair.second

        if (answer < move) {
            break
        } else if (position == k) {
            answer = move
            count++
        } else {
            if (position - 1 >= 0) {
                if (visited[position - 1] == -1) {
                    deque.addLast(Pair(position - 1, move + 1))
                    visited[position - 1] = move + 1
                } else if (visited[position - 1] == move + 1) {
                    deque.addLast(Pair(position - 1, move + 1))
                }
            }
            if (position + 1 <= 100000) {
                if (visited[position + 1] == -1) {
                    deque.addLast(Pair(position + 1, move + 1))
                    visited[position + 1] = move + 1
                } else if (visited[position + 1] == move + 1) {
                    deque.addLast(Pair(position + 1, move + 1))
                }
            }
            if (position * 2 <= 100000) {
                if (visited[position * 2] == -1) {
                    deque.addLast(Pair(position * 2, move + 1))
                    visited[position * 2] = move + 1
                } else if (visited[position * 2] == move + 1) {
                    deque.addLast(Pair(position * 2, move + 1))
                }
            }
        }
    }

    bw.write("${answer}\n")
    bw.write("${count}")
    bw.flush()
    bw.close()
}