import java.io.*

val bw = BufferedWriter(OutputStreamWriter(System.out))
lateinit var arr: IntArray
val list = mutableListOf<Int>()

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val temp = br.readLine().split(" ").map { it.toInt() }

    // 1 <= m <= n <= 7
    val n = temp[0] // 1 부터 n 까지의 자연수
    val m = temp[1] // 수열의 길이
    br.close()

    arr = IntArray(n) { it + 1 }

    solve(m, 0)
    bw.flush()
    bw.close()
}

fun solve(depth: Int, index: Int) {
    if (depth == 0) {
        for (x in list) {
            bw.write("$x ")
        }
        bw.write("\n")
        return
    }

    for (i in index..(arr.size - 1)) {
        list.add(arr[i])
        solve(depth - 1, i)
        list.removeLast()
    }
}