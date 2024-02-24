import java.util.Scanner

fun main() {
    val sc = Scanner(System.`in`)
    val t = sc.nextInt()
    
    var arr = Array<IntArray>(31) { IntArray(31) { 0 } }
    for (j in 1..30) {
        arr[1][j] = j
    }
    
    for (i in 2..30) {
        for (j in i..30) {
            arr[i][j] = arr[i - 1][j - 1] + arr[i][j - 1]
        }
    }
    
    for (i in 1..t) {
        val n = sc.nextInt()
        val m = sc.nextInt() // 1 ~ 30
        println(arr[n][m])
    }
}