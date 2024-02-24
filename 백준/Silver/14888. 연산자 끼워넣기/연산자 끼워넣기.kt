import java.io.*

lateinit var arr: IntArray
lateinit var operators: IntArray
var max = Int.MIN_VALUE
var min = Int.MAX_VALUE

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 1 <= n <= 11
    arr = br.readLine().split(" ").map { it.toInt() }.toIntArray() // 1 <= arr[1] <= 100
    operators = br.readLine().split(" ").map { it.toInt() }.toIntArray()
    br.close()

    solve(1, arr[0])

    bw.write("${max}\n")
    bw.write("${min}\n")
    bw.flush()
    bw.close()
}

fun solve(index: Int, sum: Int) {
    if (index == arr.size) {
        if (sum > max) {
            max = sum
        }
        if (sum < min) {
            min = sum
        }
        return
    }

    if (operators[0] > 0) {
        operators[0]--
        solve(index + 1, sum + arr[index])
        operators[0]++
    }
    if (operators[1] > 0) {
        operators[1]--
        solve(index + 1, sum - arr[index])
        operators[1]++
    }
    if (operators[2] > 0) {
        operators[2]--
        solve(index + 1, sum * arr[index])
        operators[2]++
    }
    if (operators[3] > 0) {
        operators[3]--
        solve(index + 1, sum / arr[index])
        operators[3]++
    }
}