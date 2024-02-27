import java.util.Scanner

fun main() {
    val sc = Scanner(System.`in`)
    val n = sc.nextInt() // 1 ~ 10
    var k = sc.nextInt() // 1 ~ 100000000
    val arr = IntArray(n) { 0 } // arr[i]: 1 ~ 1000000
    
    for (i in arr.indices) {
        arr[i] = sc.nextInt()
    }
    
    arr.sort()
    
    var answer = 0
    var index = n - 1
    
    while (k > 0) {
        val count = k / arr[index]
        k -= (arr[index] * count)
        answer += count
        index--
    }
    
    println(answer)
}