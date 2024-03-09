import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val points = Array<Pair<Int, Int>>(3) { Pair(0, 0) }

    for (i in points.indices) {
        val temp = br.readLine().split(" ").map { it.toInt() }
        points[i] = Pair(temp[0], temp[1])
    }
    br.close()

    bw.write("${ccw(points[0].first, points[0].second, 
        points[1].first, points[1].second, 
        points[2].first, points[2].second)}"
    )
    bw.flush()
    bw.close()
}

fun ccw(x1: Int, y1: Int, x2: Int, y2: Int, x3: Int, y3: Int): Int {
    val temp = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1)
    return when {
        temp > 0 -> 1
        temp < 0 -> -1
        else -> 0
    }
}