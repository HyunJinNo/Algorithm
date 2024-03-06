import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val str = br.readLine()
    br.close()

    val answer = mutableListOf<String>().apply {
        for (i in str.indices) {
            add(str.substring(i))
        }
    }.sorted()

    answer.forEach {
        bw.write("${it}\n")
    }
    bw.flush()
    bw.close()
}