import java.util.ArrayDeque
import java.util.Scanner

fun main() {
    val sc = Scanner(System.`in`)
    val n = sc.nextInt() // 1 ~ 1000
    val deque = ArrayDeque<Pair<Int, Int>>().apply {
        for (i in 1..n) {
            add(Pair(i, sc.nextInt()))
        }
    }
    
    var pair = deque.removeFirst()
    var index = pair.first
    var count = pair.second
    print("${index} ")
    
    while (!deque.isEmpty()) {
        if (count > 0) {
            for (i in 1..(count - 1)) {
                deque.offerLast(deque.removeFirst())
            }
            pair = deque.removeFirst()
        } else { // count < 0
            for (i in 1..((-count) - 1)) {
                deque.offerFirst(deque.removeLast())
            }
            pair = deque.removeLast()
        }
        
        index = pair.first
        count = pair.second
        print("${index} ")
    }
}