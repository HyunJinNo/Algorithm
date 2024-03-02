import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toInt() }

    val n = temp[0]
    val m = temp[1]
    val a = Array<IntArray>(n) { IntArray(m) }
    for (i in a.indices) {
        a[i] = br.readLine().split(" ").map { it.toInt() }.toIntArray()
    }

    val k = br.readLine().split(" ").map { it.toInt() }[1]
    val b = Array<IntArray>(m) { IntArray(k) }
    for (i in b.indices) {
        b[i] = br.readLine().split(" ").map { it.toInt() }.toIntArray()
    }
    br.close()

    for (i in a.indices) {
        for (j in b[0].indices) {
            var sum = 0
            for (index in a[0].indices) {
                sum += (a[i][index] * b[index][j])
            }
            bw.write("$sum ")
        }
        bw.write("\n")
    }

    bw.flush()
    bw.close()
}