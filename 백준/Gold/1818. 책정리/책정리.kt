import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 책의 개수, 1 <= n <= 200,000
    val list = br.readLine().split(" ").map { it.toInt() }
    br.close()

    val lis = mutableListOf<Int>()
    lis.add(list[0])

    for (i in 1..list.lastIndex) {
        when {
            list[i] < lis.first() -> lis[0] = list[i]
            list[i] > lis.last() -> lis.add(list[i])
            else -> {
                var left = 0
                var right = lis.lastIndex
                while (left + 1 < right) {
                    val mid = (left + right) / 2
                    if (list[i] < lis[mid]) {
                        right = mid
                    } else {
                        left = mid
                    }
                }
                lis[right] = list[i]
            }
        }
    }

    bw.write("${n - lis.size}")
    bw.flush()
    bw.close()
}