import java.util.Scanner
import kotlin.math.sqrt

fun main() {
    val sc = Scanner(System.`in`)
    val isPrime = BooleanArray(246913) { false }
    val visited = BooleanArray(isPrime.size) { false }
    isPrime[2] = true
    visited[2] = true
    for (x in 3..246912 step 2) {
        if (!visited[x]) {
            var flag = true
            for (y in 2..sqrt(x.toDouble()).toInt()) {
                if (x % y == 0) {
                    flag = false
                    break
                }
            }
            
            isPrime[x] = flag
            visited[x] = true
            var multiplier = 2
            while (multiplier * x <= 246912) {
                isPrime[multiplier * x] = false
                visited[multiplier * x] = true
                multiplier++
            }
        }
    }
    
    
    while (true) {
        val n = sc.nextInt()
        if (n == 0) {
            break
        }
        
        var answer = 0
        for (x in (n + 1)..(2 * n)) {
            if (isPrime[x]) {
                answer++
            }
        }
        println(answer)
    }
}