import java.util.Scanner

lateinit var arr: Array<String>
val list = mutableListOf<String>()
var l = 0
var c = 0

fun main() {
    val sc = Scanner(System.`in`)
    l = sc.nextInt()
    c = sc.nextInt()
    arr = Array<String>(c) { " " }
       
    for (i in 0 until c) {
    	arr[i] = sc.next()
    }
    
    arr.sort()
    prepare(-1, "")
    
    val result = buildString {
        list.forEach {
            if (check(it)) {
                append("${it}\n")
            }
        }
    }
    
    println(result)
}

fun prepare(index: Int, str: String) {
    if (str.length == l) {
        list.add(str)
        return
    } else if (index >= c) {
        return
    } else {
        for (i in (index + 1)..(c - 1)) {
            prepare(i, str + arr[i])
        }
    }
}

fun check(str: String): Boolean {
    var count = 0
    for (c in str) {
        if (c in arrayOf('a', 'e', 'i', 'o', 'u')) {
            count++
        }
    }
    
    if (count >= 1 && count <= str.length - 2) {
        return true
    } else {
        return false
    }
}