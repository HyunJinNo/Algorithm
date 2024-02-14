import java.util.Scanner
import java.util.Stack

fun main() {
    val sc = Scanner(System.`in`)
    val k = sc.nextInt() // 1 ~ 100000
    val stack = Stack<Int>()
    
    for (i in 1..k) {
        val num = sc.nextInt()
        if (num == 0) {
            stack.pop()
        } else {
            stack.push(num)
        }
    }
    
    var answer = 0
    for (num in stack) {
        answer += num
    }
    println(answer)
}