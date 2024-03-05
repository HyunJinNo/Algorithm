import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 도미노의 수, 1 <= n <= 500,000
    val list = mutableListOf<Pair<Int, Int>>().apply {
        for (iter in 1..n) {
            val temp = br.readLine().split(" ").map { it.toInt() }
            add(Pair(temp[0], temp[1]))
        }
    }
    br.close()

    list.sortWith { a, b ->
        when {
            a.first > b.first -> 1
            else -> -1
        }
    }

    var answer = 1
    for (i in 0..(n - 2)) {
        if (list[i].first + list[i].second < list[i + 1].first) {
            answer++
        }
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}