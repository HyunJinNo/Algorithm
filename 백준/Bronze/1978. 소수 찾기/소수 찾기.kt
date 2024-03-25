import java.util.Scanner

fun main() {
    val sc = Scanner(System.`in`)
    val n = sc.nextInt()
    var answer = 0
    
    for (i in 1..n) {
        val num = sc.nextInt()
        if (num == 1) {
            continue
        }
        
        var flag = true
        for (x in 2..(num - 1)) {
            if (num % x == 0) {
                flag = false
                break
            }
        }
        
        if (flag) {
            answer++
        }
    }
    
    println(answer)
}