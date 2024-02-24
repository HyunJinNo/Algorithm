import java.io.*
import kotlin.math.max

lateinit var arr: IntArray
lateinit var cache: Array<IntArray>

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 1 <= n <= 300
    arr = IntArray(n)
    cache = Array<IntArray>(n) { IntArray(3) { -1 } }

    for (i in arr.indices) {
        arr[i] = br.readLine().toInt() // 1 <= arr[i] <= 10,000
    }
    br.close()

    bw.write("${solve(n - 1, 1)}")
    bw.flush()
    bw.close()
}

fun solve(index: Int, step: Int): Int {
    if (index < 0) {
        return 0
    } else if (cache[index][step] != -1) {
        return cache[index][step]
    }

    var result = arr[index] + solve(index - 2, 1)
    if (step < 2) {
        result = max(result, arr[index] + solve(index - 1, step + 1))
    }

    cache[index][step] = result
    return result
}