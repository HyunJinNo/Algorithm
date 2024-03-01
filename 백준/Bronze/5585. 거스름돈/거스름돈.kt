import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    var num = 1000 - br.readLine().toInt()
    var answer = 0
    val arr = intArrayOf(500, 100, 50, 10, 5, 1)
    var index = 0

    while (num > 0) {
        answer += (num / arr[index])
        num -= (num / arr[index]) * arr[index]
        index++
    }

    br.close()
    bw.write("$answer")
    bw.flush()
    bw.close()
}