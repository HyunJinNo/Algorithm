import java.io.*
import kotlin.math.max

var n = 0
var k = 0
lateinit var items: Array<Pair<Int, Int>>
lateinit var cache: Array<IntArray>

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val temp = br.readLine().split(" ").map { it.toInt() }
    n = temp[0] // 물품의 수, 1 <= n <= 100
    k = temp[1] // 무게, 1 <= k <= 100,000
    items = Array<Pair<Int, Int>>(n) { Pair(0, 0) }
    cache = Array<IntArray>(n + 1) { IntArray(k + 1) { -1 } }

    for (i in items.indices) {
        val item = br.readLine().split(" ").map { it.toInt() }
        items[i] = Pair(item[0], item[1])
    }
    br.close()

    bw.write("${pack(0, k)}")
    bw.flush()
    bw.close()
}

fun pack(index: Int, weight: Int): Int {
    if (index >= items.size) {
        return 0
    } else if (cache[index][weight] != -1) {
        return cache[index][weight]
    }

    // index 위치에 있는 물품을 가져가지 않는 경우
    var result = pack(index + 1, weight)

    // index 위치에 있는 물품을 가져가는 경우
    if (weight >= items[index].first) {
        result = max(result, items[index].second + pack(index + 1, weight - items[index].first))
    }

    cache[index][weight] = result
    return result
}