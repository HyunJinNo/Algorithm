import java.util.*

fun main() {
    val sc = Scanner(System.`in`)
    val n = sc.nextInt() // 1 <= n <= 100000
    val m = sc.nextInt() // 1 <= m <= 100000
    val arr = IntArray(n + 1) { 0 }
    val sumArr = IntArray(n + 1) { 0 }
    var sum = 0

    for (i in 1..n) {
        arr[i] = sc.nextInt() // 1 <= arr[i] <= 1000
        sum += arr[i]
        sumArr[i] = sum
    }

    for (iter in 1..m) {
        val i = sc.nextInt()
        val j = sc.nextInt()
        println(sumArr[j] - sumArr[i - 1])
    }
}