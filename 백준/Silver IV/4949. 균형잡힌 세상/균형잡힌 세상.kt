import java.util.Scanner
import java.util.Stack

fun main() {
    val sc = Scanner(System.`in`)

    while (true) {
        val str = sc.nextLine()
        if (str == ".") {
            break
        }
        val stack = Stack<Char>()

        for (c in str) {
            when (c) {
                '(', '[' -> stack.push(c)
                ')' -> {
                    if (stack.isEmpty() || stack.peek() != '(') {
                        stack.push(c)
                        break
                    } else {
                        stack.pop()
                    }
                }
                ']' -> {
                    if (stack.isEmpty() || stack.peek() != '[') {
                        stack.push(c)
                        break
                    } else {
                        stack.pop()
                    }
                }
                else -> {}
            }
        }

        if (stack.isEmpty()) {
            println("yes")
        } else {
            println("no")
        }
    }
}