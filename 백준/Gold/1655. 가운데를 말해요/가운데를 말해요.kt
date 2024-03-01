import java.io.*
import java.util.*

fun main() {    
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 1 <= n <= 100,000
    val minQueue = PriorityQueue<Int>(reverseOrder())
    val maxQueue = PriorityQueue<Int>()

    var num = br.readLine().toInt() // -10,000 <= num <= 10,000
    var min = num
    var max = num
    minQueue.add(num)
    bw.write("${num}\n")

    for (iter in 2..n) {
        num = br.readLine().toInt() // -10,000 <= num <= 10,000
        if (num < min) {
            min = num
            minQueue.add(num)
        } else if (num > max) {
            max = num
            maxQueue.add(num)
        } else if (num < minQueue.peek()){
            minQueue.add(num)
        } else {
            maxQueue.add(num)
        }

        while (minQueue.size - maxQueue.size >= 2) {
            maxQueue.add(minQueue.poll())
        }
        while (maxQueue.size - minQueue.size >= 2) {
            minQueue.add(maxQueue.poll())
        }

        when {
            minQueue.size > maxQueue.size -> bw.write("${minQueue.peek()}\n")
            minQueue.size < maxQueue.size -> bw.write("${maxQueue.peek()}\n")
            else -> {
                if (minQueue.peek() > maxQueue.peek()) {
                    bw.write("${maxQueue.peek()}\n")
                } else {
                    bw.write("${minQueue.peek()}\n")
                }
            }
        }
    }

    br.close()
    bw.flush()
    bw.close()
}