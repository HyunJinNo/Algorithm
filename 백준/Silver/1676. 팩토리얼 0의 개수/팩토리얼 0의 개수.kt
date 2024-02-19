import java.util.*

fun main() {
    val sc = Scanner(System.`in`)
    val n = sc.nextInt() // 0 <= n <= 500
    var answer = 0
    var num = 1

    for (x in 1..n) {
        num *= x
        while (num % 10 == 0) {
            num /= 10
            answer++
        }
        num = (num % 1000)
    }
    
    println(answer)
}