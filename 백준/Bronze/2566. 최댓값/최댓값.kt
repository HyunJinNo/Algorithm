import java.util.Scanner

fun main() {
    val sc = Scanner(System.`in`)
    var maxValue = -1
    var row = -1
    var col = -1
    
    for (i in 1..9) {
        for (j in 1..9) {
            val value = sc.nextInt()
            if (value > maxValue) {
                maxValue = value
                row = i
                col = j
            }
        }
    }
    
    println(maxValue)
    println("${row} ${col}")
}