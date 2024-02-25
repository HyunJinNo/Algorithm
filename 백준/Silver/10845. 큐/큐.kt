import java.util.Scanner
import java.util.ArrayDeque

fun main() {
    val sc = Scanner(System.`in`)
    val deque = ArrayDeque<Int>()
    val n = sc.nextInt()
    
    val result = buildString {
        for (i in 1..n) {
            when (sc.next()) {
                "push" -> deque.offerLast(sc.nextInt())
                "pop" -> if (deque.isEmpty()) append("-1\n") else append("${deque.pollFirst()}\n")
                "size" -> append("${deque.size}\n")
                "empty" -> if (deque.isEmpty()) append("1\n") else append("0\n")
                "front" -> if (deque.isEmpty()) append("-1\n") else append("${deque.getFirst()}\n")
                "back" -> if (deque.isEmpty()) append("-1\n") else append("${deque.getLast()}\n")
            }
        }
    }
    
    print(result)
}