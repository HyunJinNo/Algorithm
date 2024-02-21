import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val count = br.readLine()!!.toInt()
    
    for (i in 0 until count) {
        val str = br.readLine()!!
        val a = str.split(" ")[0].toInt()
        val b = str.split(" ")[1].toInt()
        bw.write("${a + b}\n")
    }
    bw.flush()
}