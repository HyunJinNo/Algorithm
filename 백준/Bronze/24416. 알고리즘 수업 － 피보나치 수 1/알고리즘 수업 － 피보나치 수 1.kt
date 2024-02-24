import java.io.*

var answer1 = 0
var answer2 = 0

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 5 <= n <= 40
    br.close()

    fib(n)

    val arr = IntArray(n + 1) { 0 }
    arr[1] = 1
    arr[2] = 1
    for (i in 3..n) {
        answer2++
        arr[i] = arr[i - 1] + arr[i - 2]
    }

    bw.write("${answer1} ${answer2}")
    bw.flush()
    bw.close()
}

fun fib(n: Int): Int {
    if (n == 1 || n == 2) {
        answer1++
        return 1
    } else {
        return fib(n - 1) + fib(n - 2)
    }
}
