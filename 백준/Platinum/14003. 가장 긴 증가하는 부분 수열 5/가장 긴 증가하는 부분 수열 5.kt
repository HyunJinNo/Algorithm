import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 수열 A의 크기, 1 <= n <= 1,000,000
    val a = br.readLine().split(" ").map { it.toInt() } // -1,000,000,000 <= a[i] <= 1,000,000
    br.close()

    val lis = mutableListOf<Int>()
    val length = IntArray(n) { 0 }
    lis.add(a[0])
    length[0] = 1
    
    for (i in 1..(n - 1)) {
        when {
            a[i] <= lis.first() -> {
                lis[0] = a[i]
                length[i] = 1
            }
            a[i] > lis.last() -> {
                lis.add(a[i])
                length[i] = lis.size
            }
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
                length[i] = right + 1
            }
        }
    }

    val result = mutableListOf<Int>()
    var count = lis.size
    var index = n - 1
    while (count > 0) {
        if (length[index] == count && (result.isEmpty() || result.last() > a[index])) {
            result.add(a[index])
            count--
        }
        index--
    }

    bw.write("${lis.size}\n")
    result.sorted().forEach {
        bw.write("$it ")
    }
    bw.flush()
    bw.close()
}