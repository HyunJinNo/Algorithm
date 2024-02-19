import java.util.*

val cache = IntArray(11) { -1 }

fun main() {
    val sc = Scanner(System.`in`)
    val t = sc.nextInt()

    for (i in 1..t) {
        val n = sc.nextInt() // 1 <= n <= 10
        println(solution(n))
    }
}

fun solution(n: Int): Int {
    if (cache[n] != -1) {
        return cache[n]
    }

    when (n) {
        1 -> cache[n] = 1
        2 -> cache[n] = 2
        3 -> cache[n] = 4
        else -> cache[n] = solution(n - 3) + solution(n - 2) + solution(n - 1)
    }

    return cache[n]
}