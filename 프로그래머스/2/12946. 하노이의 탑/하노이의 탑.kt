class Solution {
    fun solution(n: Int): Array<IntArray> {
        val answer = mutableListOf<IntArray>()
        move(answer, 1, 2, 3, n)
        
        return answer.toTypedArray()
    }
    
    fun move(answer: MutableList<IntArray>, source: Int, temp: Int, destination: Int, n: Int) {
        if (n == 1) {
            answer.add(intArrayOf(source, destination))
        } else {
            move(answer, source, destination, temp, n - 1)
            answer.add(intArrayOf(source, destination))
            move(answer, temp, source, destination, n - 1)
        }
    }
}