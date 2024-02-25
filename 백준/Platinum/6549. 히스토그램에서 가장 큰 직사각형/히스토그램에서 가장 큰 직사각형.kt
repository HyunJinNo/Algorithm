import java.io.*
import kotlin.math.max
import kotlin.math.min

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))

    while (true) {
        val temp = br.readLine().split(" ").map { it.toLong() }
        if (temp.size == 1) {
            break
        }

        val n = temp[0].toInt() // 1 <= n <= 100,000
        val height = temp.slice(1..n) // 0 <= height[i] <= 1,000,000,000
        bw.write("${solve(height, 0, n - 1)}\n")
    }

    br.close()
    bw.flush()
    bw.close()
}

fun solve(height: List<Long>, left: Int, right: Int): Long {
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