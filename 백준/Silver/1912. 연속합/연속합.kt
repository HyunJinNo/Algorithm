import java.io.*
import kotlin.math.max

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 1 <= n <= 100,000
    val arr = br.readLine().split(" ").map { it.toInt() } // -1000 <= arr[i] <= 1000
    br.close()

    var answer = Int.MIN_VALUE
    val cache = IntArray(n) { 0 }
    for (i in (arr.size - 1) downTo 0) {
        if (i == arr.size - 1) {
            cache[i] = arr.last()
            if (answer < cache[i]) {
                answer = cache[i]
            }
            continue
        }

        cache[i] = arr[i]
        cache[i] = max(cache[i], cache[i] + cache[i + 1])
        if (answer < cache[i]) {
            answer = cache[i]
        }
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}