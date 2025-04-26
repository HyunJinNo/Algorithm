import java.util.*;

class Solution {
    public int solution(int[][] jobs) {
        // [작업의 번호, 작업의 요청 시각, 작업의 소요 시간]
        PriorityQueue<int[]> pq = new PriorityQueue<int[]>((a, b) -> {
            if (a[2] != b[2]) {
                return a[2] - b[2];
            } else if (a[1] != b[1]) {
                return a[1] - b[1];
            } else {
                return a[0] - b[0];
            }
        });
        
        int length = jobs.length;
        int[][] jobList = new int[length][3];
        
        for (int i = 0; i < length; i++) {
            jobList[i] = new int[] { i, jobs[i][0], jobs[i][1] };
        }
        
        Arrays.sort(jobList, (a, b) -> a[1] - b[1]);
        
        int currentTime = 0;
        int sum = 0;
        int index = 0;
        
        while (true) {
            while (index < length && currentTime >= jobList[index][1]) {
                pq.add(jobList[index++]);
            }
            
            if (index >= length && pq.isEmpty()) {
                break;
            }
            
            if (pq.isEmpty()) {
                currentTime = jobList[index][1];
            } else {
                int[] job = pq.poll();
                currentTime += job[2];
                sum += (currentTime - job[1]);
            }
        }
        
        return sum / length;
    }
}