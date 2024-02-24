import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val t = br.readLine().toInt() // 1 <= t <= 100

    for (i in 1..t) {
        val p = br.readLine() // 1 <= p.length <= 100,000
        val n = br.readLine().toInt() // 0 <= n <= 100,000
        val temp = br.readLine()
        val deque = if (temp.length == 2) {
            ArrayDeque<Int>()
        } else {
            ArrayDeque<Int>(temp.substring(1, temp.length - 1).split(",").map { it.toInt() })
        }
        var isReversed = false
        var flag = true

        try {
            for (func in p) {
                if (func == 'R') {
                    isReversed = !isReversed
                } else { // func == 'D'
                    if (isReversed) {
                        deque.removeLast()
                    } else {
                        deque.removeFirst()
                    }
                }
            }
        } catch (e: Exception) {
            flag = false
        }

        if (flag) {
            val result = buildString {
                append("[")

                if (deque.isNotEmpty()) {
                    if (isReversed) {
                        append(deque.removeLast())
                    } else {
                        append(deque.removeFirst())
                    }
                }

                while (deque.isNotEmpty()) {
                    append(",")
                    if (isReversed) {
                        append(deque.removeLast())
                    } else {
                        append(deque.removeFirst())
                    }
                }

                append("]")
            }
            bw.write("${result}\n")
        } else {
            bw.write("error\n")
        }
    }
    br.close()
    bw.flush()
    bw.close()
}