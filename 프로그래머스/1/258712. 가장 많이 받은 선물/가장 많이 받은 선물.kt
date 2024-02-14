class Solution {
    fun solution(friends: Array<String>, gifts: Array<String>): Int {
        // 선물 지수
        val count = mutableMapOf<String, Int>()
        
        // 각 친구가 다음 달에 받을 선물의 수
        val result = mutableMapOf<String, Int>()
        
        // 주고받은 선물
        val map = mutableMapOf<String, MutableMap<String, Int>>().apply {
            friends.forEach {
                this[it] = mutableMapOf<String, Int>()
                count[it] = 0
                result[it] = 0
            }
        }
        
        gifts.forEach {
            val friends = it.split(" ")
            val a = friends[0]
            val b = friends[1]
            count[a] = count[a]!! + 1
            count[b] = count[b]!! - 1
            
            if (map[a]!!.containsKey(b)) {
                map[a]!![b] = map[a]!![b]!! + 1
            } else {
                map[a]!![b] = 1
            }
        }
        
        for (i in friends.indices) {
            for (j in friends.indices) {
                if (i == j) {
                    continue
                }
                
                val a = friends[i]
                val b = friends[j]
                
                if (map[a]!![b] ?: 0 > map[b]!![a] ?: 0) {
                    result[a] = result[a]!! + 1
                } else if (map[a]!![b] ?: 0 == map[b]!![a] ?: 0 && count[a]!! > count[b]!!) {
                    result[a] = result[a]!! + 1
                }
            }
        }
        
        var answer = 0
        friends.forEach {
            if (result[it]!! > answer) {
                answer = result[it]!!
            }
        }
        
        return answer
    }
}