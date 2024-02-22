import java.io.*

var count = 0

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val t = br.readLine().toInt() // 1 <= t <= 1000

    for (iter in 1..t) {
        count = 0
        val result = isPalindrome(br.readLine())
        bw.write("${result} ${count}\n")
    }

    br.close()
    bw.flush()
    bw.close()
}

fun recursion(s: String, l: Int, r: Int): Int {
    count++
    return if (l >= r) 1 else if (s[l] != s[r]) 0 else recursion(s, l + 1, r - 1)
}

fun isPalindrome(s: String) = recursion(s, 0, s.length - 1)