import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val t = br.readLine().toInt() // 2 <= t <= 100

    for (iter in 1..t) {
        // n: 주가를 알 수 있는 날, 1 <= n <= 10,000
        // k: 거래 횟수, 1 <= k <= 10,000
        val (n, k) = br.readLine().split(" ").map { it.toInt() }
        val list = br.readLine().split(" ").map { it.toInt() } // 1 <= list[i] <= 10,000

        val lis = mutableListOf<Int>()
        lis.add(list[0])

        for (i in 1..list.lastIndex) {
            when {
                list[i] <= lis.first() -> lis[0] = list[i]
                list[i] > lis.last() -> lis.add(list[i])
                else -> {
                    var left = 0
                    var right = lis.lastIndex
                    while (left + 1 < right) {
                        val mid = (left + right) / 2
                        if (list[i] <= lis[mid]) {
                            right = mid
                        } else {
                            left = mid
                        }
                    }
                    lis[right] = list[i]
                }
            }
        }

        bw.write("Case #${iter}\n")
        bw.write("${if (k <= lis.size) 1 else 0}\n")
    }

    br.close()
    bw.flush()
    bw.close()
}