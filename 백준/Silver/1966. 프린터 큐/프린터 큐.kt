import java.util.*

fun main() {
    val sc = Scanner(System.`in`)
    val t = sc.nextInt()

    for (iter in 1..t) {
        val deque = ArrayDeque<Pair<Int, Int>>()
        val pq = PriorityQueue<Int>(Collections.reverseOrder())
        val n = sc.nextInt() // 1 <= n <= 100
        val m = sc.nextInt() // 0 <= m <= n

        for (i in 0 until n) {
            val num = sc.nextInt()
            deque.offerLast(Pair(i, num))
            pq.offer(num)
        }

        var order = 1
        while (!deque.isEmpty()) {
            val pair = deque.pollFirst()
            if (pair.second == pq.peek()) {
                pq.poll()
                if (pair.first == m) {
                    println(order)
                    break
                } else {
                    order++
                }
            } else {
                deque.offerLast(pair)
            }
        }
    }
}