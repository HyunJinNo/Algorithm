import java.io.*
import java.util.Scanner

fun main() {
    val sc = Scanner(System.`in`)

    while (sc.hasNext()) {
        val n = sc.nextInt() // 주가를 관찰한 날의 수, 1 <= n <= 100,000
        val list = mutableListOf<Int>().apply {
            for (iter in 1..n) {
                add(sc.nextInt())
            }
        }
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

        println("${lis.size}")
    }
}