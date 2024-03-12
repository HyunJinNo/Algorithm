import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))

    val temp = br.readLine().split(" ").map { it.toLong() }
    val n = temp[0].toInt() // n: 행렬의 크기, 2 <= n <= 5
    val b = temp[1] // b: b제곱, 1 <= 100,000,000,000
    val a = Array<IntArray>(n) { IntArray(n) }
    for (i in a.indices) {
        a[i] = br.readLine().split(" ").map { it.toInt() % 1000 }.toIntArray()
    }
    br.close()

    val result = solve(a, b)
    for (i in result.indices) {
        for (j in result[i].indices) {
            bw.write("${result[i][j]} ")
        }
        bw.write("\n")
    }

    bw.flush()
    bw.close()
}

fun solve(a: Array<IntArray>, b: Long): Array<IntArray> {
    if (b == 1L) {
        return a
    } else {
        val exp = b / 2
        val temp = solve(a, exp)
        if (b % 2 == 0L) {
            return matrixMultiplication(temp, temp)
        } else {
            return matrixMultiplication(matrixMultiplication(temp, temp), a)
        }
    }
}

fun matrixMultiplication(a: Array<IntArray>, b: Array<IntArray>): Array<IntArray> {
    val result = Array<IntArray>(a.size) { IntArray(a.size) { 0 } }
    for (i in result.indices) {
        for (j in result[i].indices) {
            var sum = 0
            for (index in result[i].indices) {
                sum += (a[i][index] * b[index][j])
                sum %= 1000
            }
            result[i][j] = sum
        }
    }
    return result
}