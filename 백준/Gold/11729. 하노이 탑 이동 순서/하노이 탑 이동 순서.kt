import java.io.*

val result = mutableListOf<Pair<Int, Int>>()

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 원판의 개수, 1 <= n <= 20
    br.close()

    move(1, 2, 3, n)

    bw.write("${result.size}\n")
    for (pair in result) {
        bw.write("${pair.first} ${pair.second}\n")
    }
    bw.flush()
    bw.close()
}

fun move(source: Int, temp: Int, destination: Int, n: Int) {
    if (n == 1) {
        result.add(Pair(source, destination))
        return
    }

    move(source, destination, temp, n - 1)
    result.add(Pair(source, destination))
    move(temp, source, destination, n - 1)
}