import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    var temp = br.readLine().split(" ").map { it.toInt() }

    // 3 <= n, m <= 50
    val n = temp[0]
    val m = temp[1]

    temp = br.readLine().split(" ").map { it.toInt() }
    var row = temp[0]
    var col = temp[1]
    var direction = temp[2]

    val arr = Array<IntArray>(n) { IntArray(m) }
    for (i in arr.indices) {
        arr[i] = br.readLine().split(" ").map { it.toInt() }.toIntArray()
    }
    br.close()

    var answer = 0
    while (true) {
        if (arr[row][col] == 0) {
            arr[row][col] = 2
            answer++
        }

        if ((row - 1 >= 0 && arr[row - 1][col] == 0) ||
            (row + 1 < n && arr[row + 1][col] == 0) ||
            (col - 1 >= 0 && arr[row][col - 1] == 0) ||
            (col + 1 < m && arr[row][col + 1] == 0)) {
            direction = (direction + 3) % 4
            when (direction) {
                0 -> if (row - 1 >= 0 && arr[row - 1][col] == 0) row--
                1 -> if (col + 1 < m && arr[row][col + 1] == 0) col++
                2 -> if (row + 1 < n && arr[row + 1][col] == 0) row++
                3 -> if (col - 1 >= 0 && arr[row][col - 1] == 0) col--
            }
        } else {
            when (direction) {
                0 -> {
                    if (row + 1 < n && arr[row + 1][col] != 1) {
                        row++
                    } else {
                        break
                    }
                }
                1 -> {
                    if (col - 1 >= 0 && arr[row][col - 1] != 1) {
                        col--
                    } else {
                        break
                    }
                }
                2 -> {
                    if (row - 1 >= 0 && arr[row - 1][col] != 1) {
                        row--
                    } else {
                        break
                    }
                }
                3 -> {
                    if (col + 1 < m && arr[row][col + 1] != 1) {
                        col++
                    } else {
                        break
                    }
                }
            }
        }
    }

    bw.write("$answer")
    bw.flush()
    bw.close()
}