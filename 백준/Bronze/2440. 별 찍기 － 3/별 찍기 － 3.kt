import java.util.*

fun main() {
    val sc = Scanner(System.`in`)
    var n = sc.nextInt()

    while (n > 0) {
        for (i in 1..n) {
            print("*")
        }
        println()
        n--
    }
}