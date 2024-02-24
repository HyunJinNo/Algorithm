import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val t = br.readLine().toInt()
    val arr = LongArray(101)
    arr[1] = 1L
    arr[2] = 1L
    arr[3] = 1L
    for (i in 4..100) {
        arr[i] = arr[i - 2] + arr[i - 3]
    }

    for (i in 1..t) {
        val n = br.readLine().toInt() // 1 <= n <= 100
        bw.write("${arr[n]}\n")
    }
    br.close()
    bw.flush()
    bw.close()
}