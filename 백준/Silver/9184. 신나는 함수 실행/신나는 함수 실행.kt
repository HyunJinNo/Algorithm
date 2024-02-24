import java.io.*

val cache = Array<Array<IntArray>>(101) { Array<IntArray>(101) { IntArray(101) { -1 } } }

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))

    while (true) {
        val arr = br.readLine().split(" ").map { it.toInt() }
        if (arr[0] == -1 && arr[1] == -1 && arr[2] == -1) {
            break
        }

        bw.write("w(${arr[0]}, ${arr[1]}, ${arr[2]}) = ${w(arr[0], arr[1], arr[2])}\n")
    }

    br.close()
    bw.flush()
    bw.close()
}

fun w(a: Int, b: Int, c: Int): Int {
    when {
        cache[a + 50][b + 50][c + 50] != -1 -> {}
        a <= 0 || b <= 0 || c <= 0 -> cache[a + 50][b + 50][c + 50] = 1
        a > 20 || b > 20 || c > 20 -> cache[a + 50][b + 50][c + 50] = w(20, 20, 20)
        a < b && b < c -> cache[a + 50][b + 50][c + 50] = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c)
        else -> cache[a + 50][b + 50][c + 50] = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1)
    }

    return cache[a + 50][b + 50][c + 50]
}