import java.util.*

fun main() {
    val sc = Scanner(System.`in`)
    val n = sc.nextInt() // 2 <= n <= 50
    val arr = Array<Pair<Int, Int>>(n) { Pair(0, 0) }

    for (i in arr.indices) {
        val x = sc.nextInt()
        val y = sc.nextInt()
        arr[i] = Pair(x, y)
    }

    for (i in arr.indices) {
        var rank = 1
        for (j in arr.indices) {
            if (arr[i].first < arr[j].first && arr[i].second < arr[j].second) {
                rank++
            }
        }
        print("${rank} ")
    }
}