import java.io.*
import java.util.Scanner
import kotlin.math.pow

lateinit var arr: CharArray

fun main() {
    val sc = Scanner(System.`in`)
    while (sc.hasNext()) {
        val n = sc.nextInt() // 0 <= n <= 12
        val length = 3.0.pow(n).toInt() // 3^n
        arr = CharArray(length) { ' ' }
        solution(0, length)
        println(arr.joinToString(""))
    }
}

fun solution(left: Int, right: Int) {
    if (left + 1 == right) {
        arr[left] = '-'
        return
    }

    val length = right - left
    val subLength = length / 3
    solution(left, left + subLength)
    solution(left + 2 * subLength, right)
}