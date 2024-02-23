import java.util.Scanner
import kotlin.math.max

lateinit var visited: IntArray

fun main() {
    val sc = Scanner(System.`in`)
    val n = sc.nextInt()
    val arr = IntArray(n) { 0 }
    visited = IntArray(n) { 0 }
    
    for (i in arr.indices) {
        arr[i] = sc.nextInt()
    }
    
    var answer = 0
    for (i in arr.indices) {
        answer = max(answer, solution(arr, i))
    }
    
    println(answer)
    
    for (i in visited.indices) {
        if (visited[i] == answer) {
            print("${arr[i]} ")
            answer--
        }
    }
}

fun solution(arr: IntArray, i: Int): Int {
    if (visited[i] != 0) {
        return visited[i]
    }
    
    var result = 1
    
    for (index in (i + 1) until arr.size) {
        if (arr[i] < arr[index]) {
            result = max(result, 1 + solution(arr, index))
        }
    }
    
    visited[i] = result
    return result
}