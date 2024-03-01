import java.io.*
import kotlin.math.roundToInt
import kotlin.math.sqrt

var n = 0
val bw: BufferedWriter by lazy {
    BufferedWriter(OutputStreamWriter(System.out))
}

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    n = br.readLine().toInt() // 1 <= n <= 8
    br.close()

    for (x in arrayOf(2, 3, 5, 7)) {
        solve(x, 1)
    }

    bw.flush()
    bw.close()
}

fun solve(num: Int, len: Int) {
    if (!isPrime(num)) {
        return
    } else if (len == n) {
        bw.write("${num}\n")
        return
    } else { // len < n
        for (x in 1..9 step 2) {
            solve(num * 10 + x, len + 1)
        }
    }
}

fun isPrime(num: Int): Boolean {
    for (y in 3..(sqrt(num.toDouble()).roundToInt())) {
        if (num % y == 0) {
            return false
        }
    }
    return true
}