import java.util.Scanner
import kotlin.math.sqrt

fun main() {
    val sc = Scanner(System.`in`)
    val t = sc.nextInt()
    
    for (i in 1..t) {
        var n = sc.nextLong()
        while (true) {
            if (isPrime(n)) {
                println(n)
                break
            } else {
                n++
            }
        }
    }
}

fun isPrime(n: Long): Boolean {
    if (n == 0L) {
        return false
    } else if (n == 1L) {
        return false
    } else if (n == 2L) {
        return true
    }
    
    for (x in 2L..(sqrt(n.toDouble())).toLong()) {
        if (n % x == 0L) {
            return false
            break
        }
    }
    
    return true
}