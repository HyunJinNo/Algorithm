import java.io.*
import kotlin.math.max

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 전깃줄의 개수, 1 <= n <= 100
    val arr = Array<Pair<Int, Int>>(n) { Pair(0, 0) }

    for (i in arr.indices) {
        val (a, b) = br.readLine().split(" ").map { it.toInt() }
        arr[i] = Pair(a, b)
    }
    br.close()

    arr.sortWith { a, b ->
        when {
            a.first > b.first -> 1
            else -> -1
        }
    }

    val length = IntArray(n) { 0 }
    for (i in arr.indices) {
        length[i] = 1
        for (j in 0 until i) {
            if (arr[j].second < arr[i].second) {
                length[i] = max(length[i], length[j] + 1)
            }
        }
    }

    bw.write("${n - length.max()}")
    bw.flush()
    bw.close()
}