import java.io.*
import kotlin.math.max

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toInt() }
    br.close()

    // -5,000 <= r1, c1, r2, c2 <= 5,000
    // 0 <= r2 - r1 <= 49
    // 0 <= c2 - c1 <= 4
    val r1 = temp[0]
    val c1 = temp[1]
    val r2 = temp[2]
    val c2 = temp[3]

    val arr = Array<IntArray>(r2 - r1 + 1) { IntArray(c2 - c1 + 1) }
    var left = (r2 - r1 + 1) * (c2 - c1 + 1)
    var row = 0
    var col = 0
    var num = 1
    var direction = Direction.EAST
    var length = 1

    if (row - r1 in 0..(r2 - r1) && col - c1 in 0..(c2 - c1)) {
        arr[row - r1][col - c1] = num
        left--
    }

    while (left > 0) {
        when (direction) {
            Direction.EAST -> {
                for (len in 1..length) {
                    col++
                    num++
                    if (row - r1 in 0..(r2 - r1) && col - c1 in 0..(c2 - c1)) {
                        arr[row - r1][col - c1] = num
                        left--
                    }
                }
                direction = Direction.NORTH
            }
            Direction.NORTH -> {
                for (len in 1..length) {
                    row--
                    num++
                    if (row - r1 in 0..(r2 - r1) && col - c1 in 0..(c2 - c1)) {
                        arr[row - r1][col - c1] = num
                        left--
                    }
                }
                direction = Direction.WEST
                length++
            }
            Direction.WEST -> {
                for (len in 1..length) {
                    col--
                    num++
                    if (row - r1 in 0..(r2 - r1) && col - c1 in 0..(c2 - c1)) {
                        arr[row - r1][col - c1] = num
                        left--
                    }
                }
                direction = Direction.SOUTH
            }
            Direction.SOUTH -> {
                for (len in 1..length) {
                    row++
                    num++
                    if (row - r1 in 0..(r2 - r1) && col - c1 in 0..(c2 - c1)) {
                        arr[row - r1][col - c1] = num
                        left--
                    }
                }
                direction = Direction.EAST
                length++
            }
        }
    }

    var numLen = 0
    for (i in arr.indices) {
        for (j in arr[i].indices) {
            numLen = max(numLen, arr[i][j].toString().length)
        }
    }

    for (i in arr.indices) {
        for (j in arr[i].indices) {
            for (iter in 0 until (numLen - arr[i][j].toString().length)) {
                bw.write(" ")
            }
            bw.write("${arr[i][j]} ")
        }
        bw.write("\n")
    }

    bw.flush()
    bw.close()
}

enum class Direction {
    EAST, NORTH, WEST, SOUTH
}