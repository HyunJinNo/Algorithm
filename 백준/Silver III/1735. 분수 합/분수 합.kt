import java.util.Scanner
import kotlin.math.max
import kotlin.math.min

fun main() {
    val sc = Scanner(System.`in`)
    var a1 = sc.nextInt()
    var b1 = sc.nextInt()
    var gcd = euclidean(max(a1, b1), min(a1, b1))
    a1 /= gcd
    b1 /= gcd
    
    var a2 = sc.nextInt()
    var b2 = sc.nextInt()
    gcd = euclidean(max(a2, b2), min(a2, b2))
    a2 /= gcd
    b2 /= gcd
    
    gcd = euclidean(max(b1, b2), min(b1, b2))
    val lcm = b1 * b2 / gcd
    
    var a3 = a1 * (lcm / b1) + a2 * (lcm / b2)
    var b3 = lcm
    gcd = euclidean(max(a3, b3), min(a3, b3))
    a3 /= gcd
    b3 /= gcd
    println("${a3} ${b3}")
}

fun euclidean(a: Int, b: Int): Int = if (b == 0) a else euclidean(b, a % b)