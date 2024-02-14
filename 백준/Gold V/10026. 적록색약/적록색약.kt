import java.util.Scanner

var n: Int = 0
lateinit var grid: Array<CharArray>
lateinit var grid2: Array<CharArray>
lateinit var visited: Array<BooleanArray>

fun main() {
    val sc = Scanner(System.`in`)
    n = sc.nextInt()
    grid = Array<CharArray>(n) { CharArray(n) { '?' } }
    grid2 = Array<CharArray>(n) { CharArray(n) { '?' } }
    visited = Array<BooleanArray>(n) { BooleanArray(n) { false } }
    
    for (i in 0 until n) {
        val str = sc.next()
        for (j in 0 until n) {
            grid[i][j] = str[j]
            if (str[j] == 'B') {
                grid2[i][j] = 'B'
            } else {
                grid2[i][j] = 'R'
            }
        }
    }
    
    var answer = 0
    for (row in 0 until n) {
        for (col in 0 until n) {
            if (!visited[row][col]) {
                visited[row][col] = true
                findSection(row, col, grid[row][col])
                answer++
            }
        }
    }
    print("${answer} ")
    
    answer = 0
    visited = Array<BooleanArray>(n) { BooleanArray(n) { false } }
    for (row in 0 until n) {
        for (col in 0 until n) {
            if (!visited[row][col]) {
                visited[row][col] = true
                findSection2(row, col, grid2[row][col])
                answer++
            }
        }
    }
    println(answer)
}

fun findSection(row: Int, col: Int, c: Char) {
    if (row > 0 && !visited[row - 1][col] && grid[row - 1][col] == c) {
        visited[row - 1][col] = true
        findSection(row - 1, col, c)
    }
    
    if (row < n - 1 && !visited[row + 1][col] && grid[row + 1][col] == c) {
        visited[row + 1][col] = true
        findSection(row + 1, col, c)
    }
    
    if (col > 0 && !visited[row][col - 1] && grid[row][col - 1] == c) {
        visited[row][col - 1] = true
        findSection(row, col - 1, c)
    }
    
    if (col < n - 1 && !visited[row][col + 1] && grid[row][col + 1] == c) {
        visited[row][col + 1] = true
        findSection(row, col + 1, c)
    }
}


fun findSection2(row: Int, col: Int, c: Char) {
    if (row > 0 && !visited[row - 1][col] && grid2[row - 1][col] == c) {
        visited[row - 1][col] = true
        findSection2(row - 1, col, c)
    }
    
    if (row < n - 1 && !visited[row + 1][col] && grid2[row + 1][col] == c) {
        visited[row + 1][col] = true
        findSection2(row + 1, col, c)
    }
    
    if (col > 0 && !visited[row][col - 1] && grid2[row][col - 1] == c) {
        visited[row][col - 1] = true
        findSection2(row, col - 1, c)
    }
    
    if (col < n - 1 && !visited[row][col + 1] && grid2[row][col + 1] == c) {
        visited[row][col + 1] = true
        findSection2(row, col + 1, c)
    }
}