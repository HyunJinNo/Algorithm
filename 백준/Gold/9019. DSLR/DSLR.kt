import java.io.BufferedReader
import java.io.InputStreamReader
import java.util.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val T = br.readLine().toInt() // 테스트 케이스의 개수
    val answer = buildString {
        for (iter in 1..T) {
            val (A, B) = br.readLine().split(" ").map { it.toInt() }
            val visited = BooleanArray(10000) { false }
            val deque = ArrayDeque<Pair<Int, String>>() // [현재 숫자, 현재까지의 명령어]
            deque.offerLast(Pair(A, ""))
            visited[A] = true

            while (!deque.isEmpty()) {
                val (num, command) = deque.removeFirst()

                if (num == B) {
                    append(command)
                    append("\n")
                    break
                }

                if (!visited[(num * 2) % 10000]) {
                    val nextNum = (num * 2) % 10000
                    deque.offerLast(Pair(nextNum, command + "D"))
                    visited[nextNum] = true
                }
                if (!visited[(num + 9999) % 10000]) {
                    val nextNum = (num + 9999) % 10000
                    deque.offerLast(Pair(nextNum, command + "S"))
                    visited[nextNum] = true
                }
                if (!visited[(num % 1000) * 10 + num / 1000]) {
                    val nextNum = (num % 1000) * 10 + num / 1000
                    deque.offerLast(Pair(nextNum, command + "L"))
                    visited[nextNum] = true
                }
                if (!visited[(num % 10) * 1000 + num / 10]) {
                    val nextNum = (num % 10) * 1000 + num / 10
                    deque.offerLast(Pair(nextNum, command + "R"))
                    visited[nextNum] = true
                }
            }
        }
    }

    print(answer.trimEnd())
}