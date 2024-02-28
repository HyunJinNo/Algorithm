import java.io.*
import kotlin.math.roundToInt
import kotlin.math.sqrt

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 1 <= n <= 4,000,000
    br.close()

    if (n == 1) {
        bw.write("0")
        bw.flush()
        bw.close()
        return
    }

    val isPrime = BooleanArray(n + 1) { false }
    val visited = BooleanArray(n + 1) { false }
    isPrime[2] = true
    visited[2] = true

    for (x in 3..n step 2) {
        if (!visited[x]) {
            var flag = true
            for (y in 2..(sqrt(x.toDouble())).roundToInt()) {
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

    val primes = mutableListOf<Int>().apply {
        for (x in 2..n) {
            if (isPrime[x]) {
                add(x)
            }
        }
    }

    var answer = 0
    var sum = 0
    var leftIndex = 0
    var rightIndex = 0

    while (true) {
        if (sum > n) {
            sum -= primes[leftIndex++]
        } else if (sum < n) {
            if (rightIndex >= primes.size) {
                break
            }
            sum += primes[rightIndex++]
        } else {
            answer++
            sum -= primes[leftIndex++]
        }
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}