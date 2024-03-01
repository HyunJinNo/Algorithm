import java.util.Arrays;

class Solution {
    public long solution(int n, int[] times) {
        Arrays.sort(times);
        long answer = (long) times[0] * n;
        long start = (long) times[0];
        long end = (long) times[0] * n;
        
        while (start <= end) {
            long middle = (start + end) / 2;
            long temp = 0;
            for (int time : times) {
                temp += (middle / time);
                if (temp >= n) {
                    answer = middle;
                    end = middle - 1;
                    break;
                }
            }
            
            if (temp < n) {
                start = middle + 1;
            }
        }
        
        return answer;
    }
}