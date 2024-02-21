import java.io.*

var n = 0
var m = 0
var b = 0
lateinit var arr: Array<IntArray>

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    var line = br.readLine().split(" ").map { it.toInt() }
    n = line[0] // 1 <= n <= 500
    m = line[1] // 1 <= m <= 500
    b = line[2] // 0 <= b <= 640,000,000
    arr = Array<IntArray>(n) { IntArray(m) }
    var minHeight = 257
    var maxHeight = -1

    for (i in arr.indices) {
        line = br.readLine().split(" ").map { it.toInt() }
        for (j in arr[0].indices) {
            arr[i][j] = line[j] // 1 <= arr[i][j] <= 256
            if (arr[i][j] > maxHeight) {
                maxHeight = arr[i][j]
            }
            if (arr[i][j] < minHeight) {
                minHeight = arr[i][j]
            }
        }
    }

    var time = Int.MAX_VALUE
    var answer = 0 // 높이
    for (height in minHeight..maxHeight) {
        val temp = check(height, b)
        if (temp in 0..time) {
            time = temp
            answer = height
        }
    }

    println("$time $answer")
}

fun check(height: Int, b: Int): Int {
    var block = b
    var time = 0

    for (i in arr.indices) {
        for (j in arr[0].indices) {
            if (height > arr[i][j]) { // 쌓는 경우
                block -= (height - arr[i][j])
                time += (height - arr[i][j])
            } else if (height < arr[i][j]) { // 빼는 경우
                block += (arr[i][j] - height)
                time += 2 * (arr[i][j] - height)
            }
        }
    }

    return if (block >= 0) time else Int.MAX_VALUE
}