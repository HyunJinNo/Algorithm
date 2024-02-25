import java.io.*
import kotlin.math.max
import kotlin.math.min

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 1 <= n <= 100,000
    val height = IntArray(n)

    for (i in height.indices) {
        height[i] = br.readLine().toInt() // 0 <= height[i] <= 1,000,000,000
    }

    br.close()
    bw.write("${solve(height, 0, n - 1)}")
    bw.flush()
    bw.close()
}

fun solve(height: IntArray, left: Int, right: Int): Int {
    if (left == right) {
        return height[left]
    }

    val mid = (left + right) / 2
    var lo = mid
    var hi = mid + 1
    var h = min(height[lo], height[hi])
    var result = max(solve(height, left, lo), solve(height, hi, right))
    result = max(result, h * (hi - lo + 1))

    while (left < lo || hi < right) {
        h = if (hi < right && (left == lo || height[lo - 1] < height[hi + 1])) {
            hi++
            min(h, height[hi])
        } else {
            lo--
            min(h, height[lo])
        }

        result = max(result, h * (hi - lo + 1))
    }

    return result
}