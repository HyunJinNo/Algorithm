import java.util.*;

class Solution {
    public int[][] solution(int n) {
        ArrayList<int[]> answer = new ArrayList<int[]>();
        
        move(answer, 1, 2, 3, n);
        
        int[][] result = new int[answer.size()][2];
        for (int i = 0; i < result.length; i++) {
            result[i] = answer.get(i);
        }
        return result;
    }
    
    public static void move(ArrayList<int[]> answer, int source, int temp, int destination, int n) {
        if (n == 1) {
            answer.add(new int[] { source, destination });
        } else {
            move(answer, source, destination, temp, n - 1);
            answer.add(new int[] { source, destination });
            move(answer, temp, source, destination, n - 1);
        }
    }
}