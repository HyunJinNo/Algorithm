import java.util.Scanner

fun main() {
    val sc = Scanner(System.`in`)
    val n = sc.nextInt()
    val cards = mutableMapOf<Int, Int>().apply {
        for (i in 1..n) {
            val num = sc.nextInt()
            if (this.containsKey(num)) {
                this.put(num, this[num]!! + 1)
            } else {
                this[num] = 1
            }
        }   
    }
    
    val m = sc.nextInt()
    val answer = buildString {
        var num = sc.nextInt()
        if (cards.containsKey(num)) {
            append(cards[num]!!)
        } else {
            append(0)
        }
        
        for (i in 2..m) {
            num = sc.nextInt()
            if (cards.containsKey(num)) {
                append(" ${cards[num]!!}")
            } else {
                append(" 0")
            }
        }
    }
    
    print(answer)
}