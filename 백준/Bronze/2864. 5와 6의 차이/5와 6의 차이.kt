import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val (a, b) = br.readLine().split(" ")
    br.close()

    val minimum = a.replace("6", "5").toInt() + b.replace("6", "5").toInt()
    val maximum = a.replace("5", "6").toInt() + b.replace("5", "6").toInt()

    bw.write("${minimum} ${maximum}")
    bw.flush()
    bw.close()
}