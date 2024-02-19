import java.util.*

var k = 0 // 갖고 있는 랜선의 개수, 1 <= k <= 10000
var n = 0 // 필요한 랜선의 개수, 1 <= n <= 1000000
lateinit var arr: IntArray

fun main() {
    val sc = Scanner(System.`in`)
    k = sc.nextInt() // 갖고 있는 랜선의 개수, 1 <= k <= 10000
    n = sc.nextInt() // 필요한 랜선의 개수, 1 <= n <= 1000000
    arr = IntArray(k) { 0 }

    for (i in arr.indices) {
        arr[i] = sc.nextInt() // 1 <= arr[i] <= 2^31 - 1
    }

    println(optimize())
}

fun decision(length: Long): Boolean {
    var count = 0
    arr.forEach {
        count += (it / length).toInt()
    }
    return (count >= n)
}

fun optimize(): Int {
    var left = 1L
    var right = 2147483647L

    while (left <= right) {
        val mid = (left + right) / 2
        if (decision(mid)) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }

    return right.toInt()
}