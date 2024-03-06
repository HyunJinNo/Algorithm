import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val t = br.readLine().toInt() // 문자열의 개수, 1 <= t <= 30

    for (iter in 1..t) {
        val str = br.readLine() // 3 <= str.length <= 100,000
        var answer = 2
        val deque = ArrayDeque<Triple<Int, Int, Int>>() // [startIndex, endIndex, result]
        deque.addLast(Triple(0, str.length - 1, 0))

        while (deque.isNotEmpty()) {
            val data = deque.removeFirst()
            val startIndex = data.first
            val endIndex = data.second
            val result = data.third

            if (startIndex > endIndex) {
                answer = result
                if (answer == 0) {
                    break
                } else {
                    continue
                }
            }

            if (str[startIndex] == str[endIndex]) {
                deque.addLast(Triple(startIndex + 1, endIndex - 1, result))
            } else if (result == 0) {
                if (str[startIndex + 1] == str[endIndex]) {
                    deque.addLast(Triple(startIndex + 2, endIndex - 1, 1))
                }
                if (str[startIndex] == str[endIndex - 1]) {
                    deque.addLast(Triple(startIndex + 1, endIndex - 2, 1))
                }
            }
        }

        bw.write("${answer}\n")
    }
    br.close()
    bw.flush()
    bw.close()
}