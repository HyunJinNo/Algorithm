import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val t = br.readLine().toInt()

    for (iter1 in 1..t) {
        val (x1, y1, x2, y2) = br.readLine().split(" ").map { it.toInt() }
        val n = br.readLine().toInt() // 행성계의 개수, 1 <= n <= 50
        var answer = 0

        for (iter2 in 1..n) {
            val (x, y, r) = br.readLine().split(" ").map { it.toInt() }
            val temp1 = (x1 - x) * (x1 - x) + (y1 - y) * (y1 - y) - (r * r)
            val temp2 = (x2 - x) * (x2 - x) + (y2 - y) * (y2 - y) - (r * r)
            if ((temp1 > 0 && temp2 < 0) || (temp1 < 0 && temp2 > 0)) {
                answer++
            }
        }

        bw.write("${answer}\n")
    }

    br.close()
    bw.flush()
    bw.close()
}