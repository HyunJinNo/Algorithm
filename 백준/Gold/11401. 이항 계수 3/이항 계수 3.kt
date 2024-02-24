import java.util.Scanner
import kotlin.math.*

lateinit var factorial: LongArray
val p = 1000000007

fun main() {
    val sc = Scanner(System.`in`)
    val n = sc.nextInt() // 1 ~ 4000000
    val k = sc.nextInt() // 0 ~ n
    
    factorial = LongArray(n + 1) { 0 }
    factorial[0] = 1L
    factorial[1] = 1L
    for (i in 2..n) {
        factorial[i] = (i * factorial[i - 1]) % p
    }
       
    val result = factorial[n] * (expdiv((factorial[n - k] * factorial[k]) % p, p - 2) % p)
    println(result % p)
}

fun expdiv(n: Long, e: Int): Long {
    if (e == 0) {
        return 1L
    } else if (e == 1) {
        return n
    } else {
        val temp = expdiv(n, e / 2) % p
        return if (e % 2 == 0) (temp * temp) % p else (((n * temp) % p) * temp) % p
    }
}