import java.io.*

var answer1 = 0
var answer2 = 0
lateinit var board: Array<IntArray>

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val size = br.readLine().toInt() // 1 <= size <= 10
    board = Array<IntArray>(size) { IntArray(size) }

    for (i in board.indices) {
        board[i] = br.readLine().split(" ").map { (it.toInt() - 1) * (-1) }.toIntArray()
    }
    br.close()

    solve1(0, 0, 0)
    solve2(0, 1, 0)

    bw.write("${answer1 + answer2}")
    bw.flush()
    bw.close()
}

fun solve1(row: Int, col: Int, count: Int) {
    if (answer1 < count) {
        answer1 = count
    }

    for (j in col..(board.size - 1) step 2) {
        if (board[row][j] == 0) {
            cover(row, j, 1)
            solve1(row, j, count + 1)
            cover(row, j, -1)
        }
    }

    for (i in (row + 1)..(board.size - 1)) {
        for (j in (i % 2)..(board.size - 1) step 2) {
            if (board[i][j] == 0) {
                cover(i, j, 1)
                solve1(i, j, count + 1)
                cover(i, j, -1)
            }
        }
    }
}

fun solve2(row: Int, col: Int, count: Int) {
    if (answer2 < count) {
        answer2 = count
    }

    for (j in col..(board.size - 1) step 2) {
        if (board[row][j] == 0) {
            cover(row, j, 1)
            solve2(row, j, count + 1)
            cover(row, j, -1)
        }
    }

    for (i in (row + 1)..(board.size - 1)) {
        for (j in ((i + 1) % 2)..(board.size - 1) step 2) {
            if (board[i][j] == 0) {
                cover(i, j, 1)
                solve2(i, j, count + 1)
                cover(i, j, -1)
            }
        }
    }
}

// [num == 1]: 체스판 위에 비숍 하나 두기
// [num == -1]: 체스판 위에 비숍 하나 빼기
fun cover(row: Int, col: Int, num: Int) {
    var i = row
    var j = col
    board[i][j] += num

    i = row - 1
    j = col - 1
    while (i >= 0 && j >= 0) {
        board[i--][j--] += num
    }

    i = row - 1
    j = col + 1
    while (i >= 0 && j < board.size) {
        board[i--][j++] += num
    }

    i = row + 1
    j = col - 1
    while (i < board.size && j >= 0) {
        board[i++][j--] += num
    }

    i = row + 1
    j = col + 1
    while (i < board.size && j < board.size) {
        board[i++][j++] += num
    }
}