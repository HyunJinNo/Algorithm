import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toLong() }
    br.close()

    // 1 <= a, b, c <= 2,147,483,647
    val a = temp[0]
    val b = temp[1]
    val c = temp[2]

    bw.write("${expdiv(a, b, c)}")
    bw.flush()
    bw.close()
}

fun expdiv(a: Long, b: Long, c: Long): Long {
    return when (b) {
        0L -> 1L % c
        1L -> a % c
        else -> {
            val temp = expdiv(a, b / 2, c)
            if (b % 2 == 0L) {
                (temp * temp) % c
            } else {
                (((a * temp) % c) * temp) % c
            }
        }
    }
}