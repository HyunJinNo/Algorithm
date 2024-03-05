import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val str = br.readLine()
    br.close()

    var flag = false
    val arr = charArrayOf('U', 'C', 'P', 'C')
    var index = 0
    for (i in str.indices) {
        if (str[i] == arr[index]) {
            index++
        }

        if (index == 4) {
            flag = true
            break
        }
    }

    if (flag) {
        bw.write("I love UCPC")
    } else {
        bw.write("I hate UCPC")
    }
    bw.flush()
    bw.close()
}