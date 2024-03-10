import java.io.*
import kotlin.math.max

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 스위치의 수(전구의 수), 1 <= n <= 10,000
    val left = br.readLine().split(" ").map { it.toInt() }
    val right = br.readLine().split(" ").map { it.toInt() }
    br.close()

    val arr = IntArray(n)
    for (i in arr.indices) {
        arr[i] = left.indexOf(right[i])
    }

    val length = IntArray(n) { 0 }
    for (i in length.indices) {
        length[i] = 1
        for (j in 0 until i) {
            if (arr[i] > arr[j]) {
                length[i] = max(length[i], 1 + length[j])
            }
        }
    }

    val result = mutableListOf<Int>().apply {
        var len = length.max()
        var index = length.lastIndex
        while (index >= 0) {
            if (length[index] == len) {
                add(left[arr[index]])
                len--
            }
            index--
        }

    }.sorted()

    bw.write("${result.size}\n")
    result.forEach {
        bw.write("$it ")
    }
    bw.flush()
    bw.close()
}