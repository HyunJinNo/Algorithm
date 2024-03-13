import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))

    val (x1, y1, x2, y2) = br.readLine().split(" ").map { it.toLong() }
    val (x3, y3, x4, y4) = br.readLine().split(" ").map { it.toLong() }
    br.close()

    if (ccw(Pair(x2 - x1, y2 - y1), Pair(x3 - x1, y3 - y1)) * ccw(Pair(x2 - x1, y2 - y1), Pair(x4 - x1, y4 - y1)) < 0 &&
        ccw(Pair(x4 - x3, y4 - y3), Pair(x2 - x3, y2 - y3)) * ccw(Pair(x4 - x3, y4 - y3), Pair(x1 - x3, y1 - y3)) < 0) {
        bw.write("1")
    } else {
        bw.write("0")
    }

    bw.flush()
    bw.close()
}

/**
 * 벡터 a를 기준으로 b가 반시계 방향으로 180도 이내에 있으면 양수를, 시계 방향으로 180도 이내에 있으면 음수를 반환한다.
 * @param a 벡터 a
 * @param b 벡터 b
 * @return 벡터의 외적 결과
 */
fun ccw(a: Pair<Long, Long>, b: Pair<Long, Long>): Int {
    val temp = (a.first * b.second) - (a.second * b.first)
    return when {
        temp > 0L -> 1
        temp < 0L -> -1
        else -> 0
    }
}