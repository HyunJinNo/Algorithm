class Solution {
    fun solution(grid: Array<String>): IntArray {
        val answer = mutableListOf<Int>()
        val visited = Array(grid.size) { Array(grid[0].length) { BooleanArray(4) } }
        for (i in grid.indices) {
            for (j in grid[0].indices) {
                var direction = 0
                var temp = 0
                var row = i
                var col = j
                var length = 0
                while (temp < 4) {
                    if (visited[row][col][direction] == true) {
                        length = 0
                        direction = ++temp
                        row = i
                        col = j
                        continue
                    } else {
                        visited[row][col][direction] = true
                        length++
                    }
                    
                    when (direction) {
                        0 -> {
                            if (row == 0) row = grid.size - 1
                            else row--
                        }
                        1 -> {
                            if (col == grid[0].length - 1) col = 0
                            else col++
                        }
                        2 -> {
                            if (row == grid.size - 1) row = 0
                            else row++
                        }
                        3 -> {
                            if (col == 0) col = grid[0].length - 1
                            else col--
                        }
                    }
                    
                    when (grid[row][col]) {
                        'L' -> {
                            when (direction) {
                                0 -> direction = 3
                                1 -> direction = 0
                                2 -> direction = 1
                                3 -> direction = 2
                            }
                        }
                        'R' -> {
                            when (direction) {
                                0 -> direction = 1
                                1 -> direction = 2
                                2 -> direction = 3
                                3 -> direction = 0
                            }
                        }
                        'S' -> {}
                    }
                    
                    if (row == i && col == j && direction == temp) {
                        answer.add(length)
                        length = 0
                        direction = ++temp
                    }
                }
            }
        }
        
        return answer.toIntArray().sorted().toIntArray()
    }
}