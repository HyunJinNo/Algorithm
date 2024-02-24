import java.io.*
import kotlin.math.max

lateinit var arr: IntArray
lateinit var cache: Array<IntArray>

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 1 <= n <= 10,000

    arr = IntArray(n)
    cache = Array<IntArray>(n) { IntArray(3) { -1 } }
    for (i in arr.indices) {
        arr[i] = br.readLine().toInt() // 0 <= arr[i] <= 1000
    }
    br.close()

    var result = solve(0, 1)
    result = max(result, solve(1, 1))

    bw.write("$result")
    bw.flush()
    bw.close()
}

fun solve(index: Int, count: Int): Int {
    if (index >= arr.size) {
        return 0
    } else if (cache[index][count] != -1) {
        return cache[index][count]
    }

    var result = arr[index]
    for (i in (index + 1)..(arr.size - 1)) {
        if (i == index + 1) {
            if (count < 2) {
                result = max(result, arr[index] + solve(i, count + 1))
            }
        } else {
            result = max(result, arr[index] + solve(i, 1))
        }
    }

    cache[index][count] = result
    return cache[index][count]
}