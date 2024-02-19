import java.util.*

fun main() {
    val sc = Scanner(System.`in`)
    val n = sc.nextInt() // 1 <= n <= 1000
    val arr = IntArray(n + 1) { 0 }
    arr[0] = 1
    arr[1] = 1
    for (i in 2..n) {
        arr[i] = (arr[i - 1] + arr[i - 2]) % 10007
    }
    println(arr[n])
}