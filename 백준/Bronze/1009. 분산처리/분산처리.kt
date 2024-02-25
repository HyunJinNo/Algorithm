import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val t = br.readLine().toInt()

    for (i in 1..t) {
        val temp = br.readLine().split(" ").map { it.toInt() }
        val a = temp[0] // 1 <= a <= 99
        val b = temp[1] // 1 <= b <= 999,999
        var result = expdiv(a, b)
        if (result == 0) {
            result = 10
        }
        bw.write("${result}\n")
    }
    br.close()
    bw.flush()
    bw.close()
}

fun expdiv(a: Int, b: Int): Int {
    if (b == 0) {
        return 1
    } else if (a == 1) {
        return 1
    } else {
        val temp = expdiv(a, b / 2) % 10
        return if (b % 2 == 0) (temp * temp) % 10 else (((a * temp) % 10) * temp) % 10
    }
}