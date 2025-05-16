import java.io.BufferedReader
import java.io.FileInputStream
import java.io.InputStreamReader
import java.util.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val input = br.readLine()
    br.close()

    // 1 <= S, G <= F <= 1_000_000
    // 0 <= U, D <= 1_000_000
    val (F, S, G, U, D) = input.split(" ").map { it.toInt() }
    val arr = IntArray(F + 1) { -1 }
    val deque = ArrayDeque<Pair<Int, Int>>()
    arr[S] = 0
    deque.offerLast(Pair(S, 0))

    while (!deque.isEmpty()) {
        val (pos, count) = deque.removeFirst()

        if (pos == G) {
            break
        }

        if (pos - D >= 1 && arr[pos - D] == -1) {
            arr[pos - D] = count + 1
            deque.offerLast(Pair(pos - D, count + 1));
        }
        if (pos + U <= F && arr[pos + U] == -1) {
            arr[pos + U] = count + 1;
            deque.offerLast(Pair(pos + U, count + 1));
        }
    }

    print(if (arr[G] != -1) arr[G] else "use the stairs")
}