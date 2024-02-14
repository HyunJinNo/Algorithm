import java.util.Scanner
import kotlin.math.*

fun main() {
    val sc = Scanner(System.`in`)
    val isPrime = BooleanArray(1000001) { false }
    val visited = BooleanArray(1000001) { false }
    isPrime[2] = true
    visited[2] = true
    
    for (x in 3..1000000 step 2) {
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
            while (x * multiplier <= 1000000) {
                isPrime[x * multiplier] = false
                visited[x * multiplier] = true
                multiplier++
            }
        }
    }
    
    val t = sc.nextInt() // 1 ~ 100
    
    for (i in 1..t) {
        val n = sc.nextInt() // 3 ~ 1000000, 짝수
        var answer = 0
        for (num in 2..(n / 2)) {
            if (isPrime[num] && isPrime[n - num]) {
                answer++
            }
        }
        
        println(answer)
    }
}