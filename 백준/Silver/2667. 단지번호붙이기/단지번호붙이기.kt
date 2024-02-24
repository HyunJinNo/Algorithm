import java.io.*

lateinit var arr: Array<CharArray>
val list = mutableListOf<Int>()
var count = 0

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 5 <= n <= 25
    arr = Array<CharArray>(n) { CharArray(n) }

    for (i in arr.indices) {
        val str = br.readLine()
        for (j in str.indices) {
            arr[i][j] = str[j]
        }
    }
    br.close()

    for (i in arr.indices) {
        for (j in arr[0].indices) {
            if (arr[i][j] == '1') {
                count = 0
                findSection(i, j)
                list.add(count)
            }
        }
    }
    list.sort()
    bw.write("${list.size}\n")
    for (x in list) {
        bw.write("${x}\n")
    }
    bw.flush()
    bw.close()
}

fun findSection(row: Int, col: Int) {
    arr[row][col] = '0'
    count++

    if (row > 0 && arr[row - 1][col] == '1') {
        findSection(row - 1, col)
    }
    if (row < arr.size - 1 && arr[row + 1][col] == '1') {
        findSection(row + 1, col)
    }
    if (col > 0 && arr[row][col - 1] == '1') {
        findSection(row, col - 1)
    }
    if (col < arr[0].size - 1 && arr[row][col + 1] == '1') {
        findSection(row, col + 1)
    }
}