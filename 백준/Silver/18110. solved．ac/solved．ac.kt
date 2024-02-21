import java.io.*
import kotlin.math.roundToInt

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val n = br.readLine().toInt() // 0 <= n <= 300000

    if (n == 0) {
        println(0)
        return
    }

    val arr = DoubleArray(n) { 0.0 }

    for (i in arr.indices) {
        arr[i] = br.readLine().toDouble() // 1 <= arr[i] <= 30
    }
    arr.sort()

    val temp = (n * 15.0 / 100.0).roundToInt()

    var sum = 0.0
    for (i in temp..(arr.size - temp - 1)) {
        sum += arr[i]
    }

    println((sum / (n - 2 * temp)).roundToInt())
}