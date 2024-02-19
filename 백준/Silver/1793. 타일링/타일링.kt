import java.util.*
import java.math.BigInteger

fun main() {
    val sc = Scanner(System.`in`)
    val arr = Array<BigInteger>(251) { BigInteger("0") }
    arr[0] = BigInteger("1")
    arr[1] = BigInteger("1")
    for (i in 2..250) {
        arr[i] = arr[i].add(arr[i - 1])
        arr[i] = arr[i].add(arr[i - 2])
        arr[i] = arr[i].add(arr[i - 2])
    }

    while (sc.hasNext()) {
        val n = sc.nextInt() // 1 <= n <= 250
        println(arr[n].toString())
    }
}