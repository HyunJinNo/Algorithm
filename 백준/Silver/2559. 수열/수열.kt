import java.io.*
import kotlin.math.max

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toInt() }

    val n = temp[0] // 2 <= n <= 100,000
    val k = temp[1] // 1 <= k <= n
    val arr = br.readLine().split(" ").map { it.toInt() } // -100 <= arr[i] <= 100
    br.close()

    var sum = 0
    val sumArr = IntArray(n).apply {
        for (i in arr.indices) {
            sum += arr[i]
            this[i] = sum
        }
    }

    var answer = sumArr[k - 1]
    for (i in k..(n - 1)) {
        answer = max(answer, sumArr[i] - sumArr[i - k])
    }
    bw.write("$answer")
    bw.flush()
    bw.close()
}