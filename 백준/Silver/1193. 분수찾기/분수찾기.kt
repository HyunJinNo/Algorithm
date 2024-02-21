fun main() {
    val x = readLine()!!.toInt()
    var current = 1
    var addition = 1
    
    while (current + addition <= x) {
        current += addition
        addition++
    }
    
    var row = 0
    var col = 0
    if (addition % 2 == 0) {
        row = 1 + (x - current)
        col = addition - (x - current)
    } else {
        row = addition - (x - current)
        col = 1 + (x - current)
    }
    
    println("${row}/${col}")
}