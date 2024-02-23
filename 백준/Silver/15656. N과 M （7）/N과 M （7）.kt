import java.io.*

val bw = BufferedWriter(OutputStreamWriter(System.out))
lateinit var arr: IntArray
val list = mutableListOf<Int>()

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val temp = br.readLine().split(" ").map { it.toInt() }

    val n = temp[0]
    val m = temp[1]

    arr = br.readLine().split(" ").map { it.toInt() }.toIntArray().sortedArray()
    br.close()

    solve(m)
    bw.flush()
    bw.close()
}

fun solve(depth: Int) {
    if (depth == 0) {
        for (x in list) {
            bw.write("$x ")
        }
        bw.write("\n")
        return
    }

    for (i in arr.indices) {
        list.add(arr[i])
        solve(depth - 1)
        list.removeLast()
    }
}