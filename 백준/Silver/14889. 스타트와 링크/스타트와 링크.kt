import java.io.*
import kotlin.math.abs

lateinit var arr: Array<IntArray>
var answer = Int.MAX_VALUE
var n = 0
val start = mutableListOf<Int>()
val link = mutableListOf<Int>()

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    n = br.readLine().toInt() // 4 <= n <= 20, 짝수
    arr = Array<IntArray>(n) { IntArray(n) }

    for (i in arr.indices) {
        arr[i] = br.readLine().split(" ").map { it.toInt() }.toIntArray()
    }
    br.close()

    start.add(0)
    makeTeam(1)
    bw.write("$answer")
    bw.flush()
    bw.close()
}

fun makeTeam(index: Int) {
    if (start.size == n / 2) {
        for (i in 0 until n) {
            if (!start.contains(i)) {
                link.add(i)
            }
        }
        calculate()
        link.clear()
        return
    }

    for (i in index..(n - 1)) {
        start.add(i)
        makeTeam(i + 1)
        start.removeLast()
    }
}

fun calculate() {
    var sum1 = 0
    var sum2 = 0

    for (i in start.indices) {
        for (j in start.indices) {
            if (i != j) {
                sum1 += arr[start[i]][start[j]]
            }
        }
    }

    for (i in link.indices) {
        for (j in link.indices) {
            if (i != j) {
                sum2 += arr[link[i]][link[j]]
            }
        }
    }

    val result = abs(sum1 - sum2)
    if (result < answer) {
        answer = result
    }
}

