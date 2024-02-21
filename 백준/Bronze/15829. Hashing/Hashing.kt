import java.util.*

fun main() {
    val sc = Scanner(System.`in`)
    val L = sc.nextInt() // 1 <= L <= 50
    val str = sc.next()
    var answer = 0L
    var r = 1L

    for (i in 0 until L) {
        answer += (((str[i].code - 96).toLong() * r) % 1234567891L)
        answer %= 1234567891L
        r = (r * 31L) % 1234567891L
    }
    println(answer)
}