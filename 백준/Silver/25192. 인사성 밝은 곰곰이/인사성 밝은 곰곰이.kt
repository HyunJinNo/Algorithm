import java.util.Scanner

fun main() {
    val sc = Scanner(System.`in`)
    val n = sc.nextInt() // 1 ~ 100000
    val userSet = mutableSetOf<String>()
    var answer = 0
    
    for (i in 1..n) {
        val str = sc.next()
        
        if (str == "ENTER") {
            userSet.clear()
        } else if (!userSet.contains(str)) {
            answer++
            userSet.add(str)
        }
    }
    
    println(answer)
}