import java.util.*
import kotlin.math.pow

fun main() {
    val sc = Scanner(System.`in`)
    val L = sc.nextInt() // 1 <= L <= 50
    val str = sc.next()
    var answer = 0

    for (i in 0 until L) {
        answer += (str[i].code - 96) * (31.0.pow(i).toInt()) % 1234567891
    }
    println(answer)
}