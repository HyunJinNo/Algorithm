import java.util.*

fun main() {
    val sc = Scanner(System.`in`)
    val n = sc.nextInt() // 1 <= n <= 100000
    val arr = IntArray(n) { 0 }

    for (i in arr.indices) {
        arr[i] = sc.nextInt()
    }

    val stack = Stack<Int>()
    val sb = StringBuilder()
    var index = 0
    var nextNum = 1
    while (index < arr.size) {
        if (stack.empty()) {
            if (nextNum <= n) {
                stack.push(nextNum)
                sb.append("+\n")
                nextNum++
            } else {
                println("NO")
                return
            }
        } else if (stack.peek() == arr[index]) {
            stack.pop()
            sb.append("-\n")
            index++
        } else { // stack.peek() != arr[index]
            if (nextNum <= n) {
                stack.push(nextNum)
                sb.append("+\n")
                nextNum++
            } else {
                println("NO")
                return
            }
        }
    }

    print(sb.toString())
}