import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 1 <= n <= 100

    for (i in 1..n) {
        val k = br.readLine().toInt() // 1 <= k <= 80
        for (j in 1..k) {
            bw.write("=")
        }
        bw.write("\n")
    }

    br.close()
    bw.flush()
    bw.close()
}