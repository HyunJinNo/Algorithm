import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toInt() }

    val n = temp[0] // 1 <= n <= 1,000,000
    val m = temp[1] // 2 <= m <= 1,000
    val list = br.readLine().split(" ").map { it.toInt() } // 0 <= list[i] <= 1,000,000,000
    br.close()

    var sum = 0
    var answer = 0L
    val sumArr = IntArray(m) { 0 }
    for (i in list.indices) {
        sum += list[i]
        sum %= m
        sumArr[sum]++
        if (sum == 0) {
            answer++
        }
    }

    for (i in sumArr.indices) {
        answer += (sumArr[i] - 1).toLong() * sumArr[i].toLong() / 2
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}