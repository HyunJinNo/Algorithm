import java.io.*
import kotlin.math.min
import kotlin.math.roundToInt

var t = 0.0
var n = 0
lateinit var run: DoubleArray
lateinit var cycle: DoubleArray

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    t = br.readLine().toDouble() // 총 거리, 0.0 < t <= 100.0
    n = br.readLine().toInt() // 참가자 수, 1 <= n <= 20
    run = DoubleArray(n) // 달리기 속도
    cycle = DoubleArray(n) // 사이클 속도

    for (i in 0 until n) {
        val data = br.readLine().split(" ").map { it.toDouble() }
        run[i] = data[0]
        cycle[i] = data[1]
    }

    val r = maxDifference()
    if (diff(r) < 0) {
        println("The cheater cannot win.")
    } else {
        System.out.printf("The cheater can win by %d seconds with r = %.2fkm and k = %.2fkm.", (diff(r) * 3600).roundToInt(), r, t - r)
    }
}

fun time(r: Double, i: Int): Double = (r / run[i]) + ((t - r) / cycle[i])

fun diff(r: Double): Double {
    val cheater = time(r, n - 1)
    var others = time(r, 0)

    for (i in 1..(n - 2)) {
        others = min(others, time(r, i))
    }

    return others - cheater
}

fun maxDifference(): Double {
    var r = t / 2
    var delta = r

    while (delta > 0.00000001) {
        if (r + delta <= t && diff(r + delta) > diff(r)) r += delta
        if (r - delta >= 0 && diff(r - delta) > diff(r)) r -= delta
        delta *= 0.9999
    }

    return r
}