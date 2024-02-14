import java.util.*

fun main() {
    val sc = Scanner(System.`in`)
    val n = sc.nextInt() // 1 ~ 1000
    val stack = Stack<Int>()
    var order = 1

    for (i in 1..n) {
        val num = sc.nextInt()
        if (order == num) {
            order++
            while (!stack.empty() && stack.peek() == order) {
                stack.pop()
                order++
            }
        } else {
            stack.push(num)
        }
    }

    if (stack.empty()) {
        println("Nice")
    } else {
        println("Sad")
    }
}