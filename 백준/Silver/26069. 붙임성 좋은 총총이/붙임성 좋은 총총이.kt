import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val n = br.readLine().toInt() // 1 <= n <= 1000
    val set = mutableSetOf<String>()
    set.add("ChongChong")

    for (i in 1..n) {
        val people = br.readLine().split(" ")
        if (set.contains(people[0]) || set.contains(people[1])) {
            set.add(people[0])
            set.add(people[1])
        }
    }

    println(set.size)
}