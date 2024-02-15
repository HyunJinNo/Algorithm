import java.util.*
import kotlin.math.max
import kotlin.math.min

fun main() {
    val sc = Scanner(System.`in`)
    val a = sc.nextInt()
    val b = sc.nextInt()

    val gcd = euclidean(max(a, b), min(a, b))
    println(gcd)
    println(a * b / gcd)
}

fun euclidean(a: Int, b: Int): Int = if (b == 0) a else euclidean(b, a % b)