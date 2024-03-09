import java.io.*

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val bw = BufferedWriter(OutputStreamWriter(System.out))
    val n = br.readLine().toInt() // 전깃줄의 개수, 1 <= n <= 100,000
    val arr = Array<Pair<Int, Int>>(n) { Pair(0, 0) }

    for (i in arr.indices) {
        val (a, b) = br.readLine().split(" ").map { it.toInt() }
        arr[i] = Pair(a, b)
    }
    br.close()

    arr.sortWith { a, b ->
        when {
            a.first > b.first -> 1
            else -> -1
        }
    }

    val lis = mutableListOf<Pair<Int, Int>>()
    val length = IntArray(n) { 0 }
    lis.add(arr[0])
    length[0] = 1

    for (i in 1..arr.lastIndex) {
        when {
            arr[i].second < lis.first().second -> {
                lis[0] = arr[i]
                length[i] = 1
            }
            arr[i].second > lis.last().second -> {
                lis.add(arr[i])
                length[i] = lis.size
            }
            else -> {
                var left = 0
                var right = lis.lastIndex
                while (left + 1 < right) {
                    val mid = (left + right) / 2
                    if (arr[i].second > lis[mid].second) {
                        left = mid
                    } else {
                        right = mid
                    }
                }
                lis[right] = arr[i]
                length[i] = right + 1
            }
        }
    }

    val temp = mutableListOf<Int>()
    var count = lis.size
    var index = n - 1
    while (count > 0) {
        if (length[index] == count && (temp.isEmpty() || temp.last() > arr[index].second)) {
            temp.add(arr[index].second)
            count--
        }
        index--
    }
    temp.sort()

    index = 0
    val result = mutableListOf<Int>().apply {
        for (pair in arr) {
            if (index >= temp.size) {
                add(pair.first)
            } else if (pair.second != temp[index]) {
                add(pair.first)
            } else {
                index++
            }
        }
    }
    bw.write("${result.size}\n")
    result.forEach {
        bw.write("${it}\n")
    }
    bw.flush()
    bw.close()
}