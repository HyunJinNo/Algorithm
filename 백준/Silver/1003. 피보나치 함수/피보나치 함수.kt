import java.io.*

val cache = Array<IntArray?>(41) { null }

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val t = br.readLine().toInt()

    for (i in 1..t) {
        val n = br.readLine().toInt() // 0 <= n <= 40
        val result = fib(n)
        bw.write("${result[0]} ${result[1]}\n")
    }

    br.close()
    bw.flush()
    bw.close()
}

fun fib(n: Int): IntArray {
    if (cache[n] != null) {
        return cache[n]!!
    }

    when (n) {
        0 -> {
            cache[n] = intArrayOf(1, 0)
            return cache[n]!!
        }
        1 -> {
            cache[n] = intArrayOf(0, 1)
            return cache[n]!!
        }
        else -> {
            val arr = IntArray(2) { 0 }
            var temp = fib(n - 1)
            for (i in 0..1) {
                arr[i] += temp[i]
            }
            temp = fib(n - 2)
            for (i in 0..1) {
                arr[i] += temp[i]
            }
            cache[n] = arr
            return cache[n]!!
        }
    }
}