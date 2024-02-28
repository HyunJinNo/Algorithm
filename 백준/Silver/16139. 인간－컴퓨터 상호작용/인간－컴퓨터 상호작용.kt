import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val str = br.readLine()
    val arr = IntArray(26) { 0 }
    val list = mutableListOf<IntArray>()
    for (c in str) {
        arr[c - 'a']++
        list.add(arr.clone())
    }

    val t = br.readLine().toInt()

    for (iter in 1..t) {
        val temp = br.readLine().split(" ")
        val c = temp[0][0]
        val startIndex = temp[1].toInt()
        val endIndex = temp[2].toInt()

        if (startIndex == 0) {
            bw.write("${list[endIndex][c - 'a']}\n")
        } else {
            bw.write("${list[endIndex][c - 'a'] - list[startIndex - 1][c - 'a']}\n")
        }
    }

    br.close()
    bw.flush()
    bw.close()
}