import java.io.*
import kotlin.math.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val t = br.readLine().toInt()

    for (iter in 1..t) {
        val temp = br.readLine().split(" ").map { it.toDouble() }
        val x1 = temp[0]
        val y1 = temp[1]
        val r1 = temp[2]
        val x2 = temp[3]
        val y2 = temp[4]
        val r2 = temp[5]

        if (x1 == x2 && y1 == y2) {
            if (r1 == r2) {
                bw.write("-1\n")
            } else {
                bw.write("0\n")
            }
        } else {
            val d = sqrt((x2 - x1).pow(2) + (y2 - y1).pow(2))
            when {
                d == r1 + r2 || d == abs(r2 - r1) -> bw.write("1\n")
                d < r1 + r2 && d > abs(r2 - r1) -> bw.write("2\n")
                else -> bw.write("0\n")
            }
        }
    }
    
    br.close()
    bw.flush()
    bw.close()
}