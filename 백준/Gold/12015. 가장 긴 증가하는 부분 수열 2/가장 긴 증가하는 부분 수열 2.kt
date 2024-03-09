import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 수열 A의 크기, 1 <= n <= 1,000,000
    val a = br.readLine().split(" ").map { it.toInt() } // 1 <= a[i] <= 1,000,000
    br.close()

    val lis = mutableListOf<Int>()
    lis.add(a[0])
    for (i in 1..(n - 1)) {
        when {
            a[i] <= lis.first() -> lis[0] = a[i]
            a[i] > lis.last() -> lis.add(a[i])
            else -> {
                var left = 0
                var right = lis.lastIndex
                while (left + 1 < right) {
                    val mid = (left + right) / 2
                    if (a[i] <= lis[mid]) {
                        right = mid
                    } else {
                        left = mid
                    }
                }
                lis[right] = a[i]
            }
        }
    }

    bw.write("${lis.size}")
    bw.flush()
    bw.close()
}