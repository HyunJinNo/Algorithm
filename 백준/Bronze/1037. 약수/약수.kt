import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val size = br.readLine().toInt() // 1 <= size <= 50
    val numbers = br.readLine().split(" ").map { it.toLong() }.toMutableList()
    br.close()

    numbers.sort()
    println(numbers.first() * numbers.last())
}