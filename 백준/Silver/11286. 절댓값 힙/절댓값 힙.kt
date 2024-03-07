import java.util.*
import kotlin.math.*

fun main() {
    val sc = Scanner(System.`in`)
    val n = sc.nextInt()
    val pq = PriorityQueue<Int>({ 
        a, b ->     
        when {
            abs(a) > abs(b) -> 1
            abs(a) < abs(b) -> -1
            else -> when {
                a > b -> 1
                a < b -> -1
                else -> 0
            }
        }
    })
    
    for (i in 1..n) {
        val x = sc.nextInt()
        if (x == 0) {
            if (pq.isEmpty()) {
                println(x)
            } else {
                println(pq.poll())
            }
        } else {
            pq.offer(x)
        }
    }
}