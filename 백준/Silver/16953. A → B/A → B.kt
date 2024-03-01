import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toLong() }
    br.close()

    // 1 <= a < b <= 1,000,000,000
    val a = temp[0]
    val b = temp[1]
    val deque = ArrayDeque<Pair<Long, Int>>() // [num, count]
    deque.addLast(Pair(a * 2, 1))
    deque.addLast(Pair(a * 10 + 1, 1))
    var answer = -1
    val visited = BooleanArray(b.toInt() + 1) { false }
    visited[a.toInt()] = true

    while (deque.isNotEmpty()) {
        val pair = deque.removeFirst()
        val num = pair.first
        val count = pair.second

        when {
            num > b -> continue
            num == b -> {
                answer = count + 1
                break
            }
            else -> {
                if (num * 2 in 0..b && !visited[(num * 2).toInt()]) {
                    visited[(num * 2).toInt()] = true
                    deque.addLast(Pair(num * 2, count + 1))
                }
                if (num * 10 + 1 in 0..b && !visited[(num * 10 + 1).toInt()]) {
                    visited[(num * 10 + 1).toInt()] = true
                    deque.addLast(Pair(num * 10 + 1, count + 1))
                }
            }
        }
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}