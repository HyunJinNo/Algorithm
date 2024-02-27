import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val str = br.readLine() // 1 <= str.length <= 1,000,000
    val bomb = br.readLine() // 1 <= bomb.length <= 36
    br.close()

    val deque1 = ArrayDeque<Char>()
    val deque2 = ArrayDeque<Char>()

    for (c in str) {
        deque1.addLast(c)

        var index = bomb.length - 1
        while (true) {
            if (index < 0) {
                deque2.clear()
                break
            }

            if (deque1.isNotEmpty() && deque1.last() == bomb[index]) {
                index--
                deque2.addLast(deque1.removeLast())
            } else {
                while (deque2.isNotEmpty()) {
                    deque1.addLast(deque2.removeLast())
                }
                break
            }
        }
    }

    val result = buildString {
        while (deque1.isNotEmpty()) {
            append(deque1.removeFirst())
        }
    }

    if (result.isEmpty()) {
        bw.write("FRULA")
    } else {
        bw.write(result)
    }

    bw.flush()
    bw.close()
}