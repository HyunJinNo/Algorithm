import java.io.*

var n = 0
var k = 0
var answer = -1
var count = 0

fun main() {
    val br = BufferedReader(InputStreamReader(System.`in`))
    val temp = br.readLine().split(" ").map { it.toInt() }
    n = temp[0] // 배열의 크기, 5 <= n <= 500,000
    k = temp[1] // 저장 횟수, 1 <= k <= 100,000,000
    val arr = br.readLine().split(" ").map { it.toInt() }.toIntArray()// 1 <= arr[i] <= 1,000,000,000
    br.close()

    mergeSort(arr, 0, n - 1)
    println(answer)
}

fun mergeSort(arr: IntArray, left: Int, right: Int) {
    if (count >= k) {
        return
    }

    if (left < right) {
        val mid = (left + right) / 2
        mergeSort(arr, left, mid)
        mergeSort(arr, mid + 1, right)
        merge(arr, left, mid, right)
    }
}

fun merge(arr: IntArray, left: Int, mid: Int, right: Int) {
    if (count >= k) {
        return
    }

    var i = left
    var j = mid + 1
    var index = 0
    val temp = IntArray(right - left + 1)

    while (i <= mid && j <= right) {
        if (arr[i] <= arr[j]) {
            temp[index++] = arr[i++]
        } else {
            temp[index++] = arr[j++]
        }
    }

    while (i <= mid) {
        temp[index++] = arr[i++]
    }
    while (j <= right) {
        temp[index++] = arr[j++]
    }

    i = left
    index = 0
    while (i <= right) {
        arr[i++] = temp[index++]
        count++

        if (count == k) {
            answer = arr[i - 1]
            break
        }
    }
}