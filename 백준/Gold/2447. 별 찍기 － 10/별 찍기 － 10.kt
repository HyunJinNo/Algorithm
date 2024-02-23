import java.io.*

lateinit var arr: Array<CharArray>

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))

    val n = br.readLine().toInt() // n = 3^k (1 <= k <= 7)
    br.close()
    arr = Array<CharArray>(n) { CharArray(n) { ' ' } }

    solve(0, n, 0, n)
    for (i in arr.indices) {
        bw.write(arr[i].joinToString(""))
        bw.write("\n")
    }
    bw.flush()
    bw.close()
}

fun solve(startRow: Int, endRow: Int, startCol: Int, endCol: Int) {
    val length = endRow - startRow

    if (length == 3) {
        for (i in startRow until endRow) {
            for (j in startCol until endCol) {
                arr[i][j] = '*'
            }
        }
        arr[startRow + 1][startCol + 1] = ' '
        return
    }


    val subLength = length / 3
    for (i in 0..2) {
        for (j in 0..2) {
            if (i == 1 && j == 1) {
                continue
            }

            solve(startRow + subLength * i,
                startRow + subLength * (i + 1),
                startCol + subLength * j,
                startCol + subLength * (j + 1)
            )
        }
    }
}