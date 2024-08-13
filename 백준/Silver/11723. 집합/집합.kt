import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))

    val s = mutableSetOf<Int>()

    // m: 수행해야 하는 연산의 수, 1 <= m <= 3,000,000
    val m = br.readLine().trim().toInt()
    val sb = StringBuilder()

    for (i in 1..m) {
        val line = br.readLine().trim()

        if (line == "all") {
            s.clear()
            for (x in 1..20) {
                s.add(x)
            }
            continue
        } else if (line == "empty") {
            s.clear()
            continue
        }

        val (command, x) = line.split(" ")

        when (command) {
            "add" -> s.add(x.toInt())
            "remove" -> s.remove(x.toInt())
            "check" -> {
                if (s.contains(x.toInt())) {
                    sb.append("1\n")
                } else {
                    sb.append("0\n")
                }
            }
            "toggle" -> {
                if (s.contains((x.toInt()))) {
                    s.remove(x.toInt())
                } else {
                    s.add(x.toInt())
                }
            }
        }
    }

    println(sb.toString())

    bw.flush()
    bw.close()
}