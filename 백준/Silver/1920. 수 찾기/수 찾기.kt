import java.util.Scanner

fun main() {
    val sc = Scanner(System.`in`)
    val n = sc.nextInt() // 1 ~ 500000
    val numSet = mutableSetOf<Int>().apply {
        for (i in 1..n) {
            add(sc.nextInt())
        }
    }
    
    val m = sc.nextInt() // 1 ~ 100000
    val result = buildString {
        for (i in 1..m) {
            val num = sc.nextInt()
            if (numSet.contains(num)) {
                append("1\n")
            } else {
                append("0\n")
            }
        }
    }
    print(result)
}