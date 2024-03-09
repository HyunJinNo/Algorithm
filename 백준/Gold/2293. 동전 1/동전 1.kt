import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))

    // n: 동전의 종류, 1 <= n <= 100
    // k: 총 k원, 1 <= k <= 10,000
    val (n, k) = br.readLine().split(" ").map { it.toInt() }
    val list = mutableListOf<Int>().apply {
        for (iter in 1..n) {
            add(br.readLine().toInt()) // 1 <= x <= 100,000
        }
    }.sorted()
    br.close()

    val cache = IntArray(k + 1) { 0 }
    cache[0] = 1
    for (num in list) {
        for (i in 1..k) {
            if (i - num >= 0) {
                cache[i] += cache[i - num]
            }
        }
    }

    bw.write("${cache[k]}")
    bw.flush()
    bw.close()
}