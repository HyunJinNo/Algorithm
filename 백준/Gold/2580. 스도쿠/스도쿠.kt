import java.io.*

val bw = BufferedWriter(OutputStreamWriter(System.out))
val board = Array<IntArray>(9) { IntArray(9) }
var isFound = false

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))

    for (i in board.indices) {
        board[i] = br.readLine().split(" ").map { it.toInt() }.toIntArray()
    }
    br.close()

    solve(0, 0)
}

fun solve(row: Int, col: Int) {
    if (row == board.size) {
        if (check()) {
            isFound = true
            for (arr in board) {
                bw.write(arr.joinToString(" "))
                bw.write("\n")
            }
            bw.flush()
            bw.close()
        }
        return
    }

    var flag = true

    for (j in col..8) {
        if (board[row][j] == 0) {
            flag = false
            val numList = getList(row, j)
            for (num in numList) {
                if (isFound) {
                    return
                }
                board[row][j] = num
                solve(row, j + 1)
                board[row][j] = 0
            }
            break
        }
    }

    if (flag) {
        solve(row + 1, 0)
    }
}

fun getList(row: Int, col: Int): MutableList<Int> {
    val count = IntArray(10) { 0 }
    for (i in 0..8) {
        count[board[i][col]]++
    }
    for (j in 0..8) {
        count[board[row][j]]++
    }

    var i = 0
    var j = 0

    when (row) {
        in 0..2 -> i = 0
        in 3..5 -> i = 3
        in 6..8 -> i = 6
    }
    when (col) {
        in 0..2 -> j = 0
        in 3..5 -> j = 3
        in 6..8 -> j = 6
    }

    for (a in i..(i + 2)) {
        for (b in j..(j + 2)) {
            count[board[a][b]]++
        }
    }

    val result = mutableListOf<Int>().apply {
        for (index in 1..9) {
            if (count[index] == 0) {
                add(index)
            }
        }
    }

    return result
}

fun check(): Boolean {
    for (i in 0..8) {
        if (board[i].sum() != 45) {
            return false
        }
    }

    for (j in 0..8) {
        var sum = 0
        for (i in 0..8) {
            sum += board[i][j]
        }
        if (sum != 45) {
            return false
        }
    }

    for (i in 0..2) {
        for (j in 0..2) {
            var sum = 0
            for (a in 0..2) {
                for (b in 0..2) {
                    sum += board[3 * i + a][3 * j + b]
                }
            }

            if (sum != 45) {
                return false
            }
        }
    }

    return true
}