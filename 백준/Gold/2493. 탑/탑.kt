import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 탑의 수, 1 <= n <= 500,000
    val list = br.readLine().split(" ").map { it.toInt() } // 1 <= list[i] <= 100,000,000
    br.close()

    val deque = ArrayDeque<Pair<Int, Int>>() // [index, num]
    val answer = IntArray(list.size) { 0 }
    for (i in list.indices) {
        while (true) {
            if (deque.isEmpty()) {
                deque.addLast(Pair(i + 1, list[i]))
                break
            } else if (deque.last().second >= list[i]) {
                answer[i] = deque.last().first
                deque.addLast(Pair(i + 1, list[i]))
                break
            } else {
                deque.removeLast()
            }
        }
    }

    answer.forEach {
        bw.write("$it ")
    }

    bw.flush()
    bw.close()
}