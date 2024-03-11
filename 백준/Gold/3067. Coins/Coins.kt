import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val t = br.readLine().toInt() // 1 <= t <= 10

    for (iter in 1..t) {
        val n = br.readLine().toInt() // 동전의 가지 수, 1 <= n <= 20
        val list = br.readLine().split(" ").map { it.toInt() } // 1 <= list[i] <= 10,000
        val m = br.readLine().toInt() // 금액, 1 <= m <= 10,000

        val count = IntArray(m + 1) { 0 }
        count[0] = 1
        for (num in list) {
            for (i in 1..m) {
                if (i - num >= 0) {
                    count[i] += count[i - num]
                }
            }
        }

        bw.write("${count[m]}\n")
    }

    br.close()
    bw.flush()
    bw.close()
}