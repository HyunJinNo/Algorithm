import java.io.*
import kotlin.math.max

lateinit var arr: IntArray
lateinit var leftCache: IntArray
lateinit var rightCache: IntArray

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 1 <= n <= 1000
    arr = br.readLine().split(" ").map { it.toInt() }.toIntArray()
    br.close()
    leftCache = IntArray(n) { -1 }
    rightCache = IntArray(n) { -1 }

    var result = 0
    for (i in arr.indices) {
        result = max(result, findLeft(i, arr[i]) + findRight(i, arr[i]) - 1)
    }

    bw.write("$result")
    bw.flush()
    bw.close()
}

fun findLeft(index: Int, num: Int): Int {
    if (leftCache[index] != -1) {
        return leftCache[index]
    }

    var result = 1
    for (i in (index - 1) downTo 0) {
        if (arr[i] < num) {
            result = max(result, 1 + findLeft(i, arr[i]))
        }
    }

    leftCache[index] = result
    return result
}

fun findRight(index: Int, num: Int): Int {
    if (rightCache[index] != -1) {
        return rightCache[index]
    }

    var result = 1
    for (i in (index + 1)..(arr.size - 1)) {
        if (arr[i] < num) {
            result = max(result, 1 + findRight(i, arr[i]))
        }
    }

    rightCache[index] = result
    return result
}