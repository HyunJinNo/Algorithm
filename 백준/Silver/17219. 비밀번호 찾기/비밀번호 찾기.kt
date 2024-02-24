import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toInt() }
    val n = temp[0] // 1 <= n <= 100,000
    val m = temp[1] // 1 <= m <= 100,000

    val password = mutableMapOf<String, String>().apply {
        for (i in 1..n) {
            val str = br.readLine().split(" ")
            this[str[0]] = str[1]
        }
    }

    for (i in 1..m) {
        bw.write("${password[br.readLine()]}\n")
    }
    br.close()
    bw.flush()
    bw.close()
}