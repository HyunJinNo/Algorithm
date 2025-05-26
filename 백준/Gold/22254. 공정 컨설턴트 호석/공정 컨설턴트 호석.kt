import java.io.BufferedReader
import java.io.FileInputStream
import java.io.InputStreamReader
import java.util.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))

    // N: 선물 주문의 개수, 1 <= N <= 100_000
    // X: 남은 시간, 1 <= X <= 1_000_000_000
    val (N, X) = br.readLine().split(" ").map { it.toInt() }
    val arr = br.readLine().split(" ").map { it.toInt() }

    var start = 1
    var end = N

    while (start < end) {
        val mid = (start + end) / 2
        val pq = PriorityQueue<Int>()
        var flag = true

        for (i in 0 until mid) {
            pq.offer(arr[i])
        }

        for (i in mid until N) {
            if (pq.peek() + arr[i] > X) {
                flag = false
                break
            }
            pq.offer(pq.poll() + arr[i])
        }

        if (flag) {
            end = mid
        } else {
            start = mid + 1
        }
    }

    print(end)
}