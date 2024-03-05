import java.util.Scanner
import kotlin.math.*

fun main() {
    val sc = Scanner(System.`in`)
    val m = sc.nextInt()
    val n = sc.nextInt()
    
    val isPrime = BooleanArray(n + 1) { false }
    val visited = BooleanArray(n + 1) { false }
    isPrime[2] = true
    visited[2] = true
    
    for (x in 3..n step 2) {
        if (!visited[x]) {
            var flag = true
            for (y in 2..floor(sqrt(x.toDouble())).toInt()) {
                if (x % y == 0) {
                    flag = false
                    break
                }
            }
        
            isPrime[x] = flag
            visited[x] = true
            
            var multiplier = 2
            while (x * multiplier <= n) {
                isPrime[x * multiplier] = false
                visited[x * multiplier] = true
                multiplier++
            }
        }
    }
    
    for (i in m..n) {
        if (isPrime[i]) {
            println(i)
        }
    }
}