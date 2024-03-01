import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 각 배열의 원소의 개수, 1 <= n <= 50
    val a = br.readLine().split(" ").map { it.toInt() }.toIntArray()
    val b = br.readLine().split(" ").map { it.toInt() }.toIntArray()
    br.close()

    a.sort()
    b.sortDescending()

    var answer = 0
    for (i in a.indices) {
        answer += (a[i] * b[i])
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}