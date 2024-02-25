import java.io.*
import kotlin.math.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 1 <= n <= 100,000
    val arr1 = Array<IntArray>(n) { IntArray(3) } // 최대 점수
    val arr2 = Array<IntArray>(n) { IntArray(3) } // 최소 점수

    for (i in arr1.indices) {
        val arr = br.readLine().split(" ").map { it.toInt() }.toIntArray()
        arr1[i] = arr
        arr2[i] = arr.clone()
    }
    br.close()

    for (i in 1 until n) {
        arr1[i][0] += max(arr1[i - 1][0], arr1[i - 1][1])
        arr1[i][2] += max(arr1[i - 1][1], arr1[i - 1][2])
        arr2[i][0] += min(arr2[i - 1][0], arr2[i - 1][1])
        arr2[i][2] += min(arr2[i - 1][1], arr2[i - 1][2])

        var maximum = -1
        for (num in arr1[i - 1]) {
            maximum = max(maximum, num)
        }
        arr1[i][1] += maximum

        var minimum = 987654321
        for (num in arr2[i - 1]) {
            minimum = min(minimum, num)
        }
        arr2[i][1] += minimum
    }

    var maximum = -1
    for (num in arr1[n - 1]) {
        maximum = max(maximum, num)
    }
    var minimum = 987654321
    for (num in arr2[n - 1]) {
        minimum = min(minimum, num)
    }

    bw.write("${maximum} ${minimum}")
    bw.flush()
    bw.close()
}