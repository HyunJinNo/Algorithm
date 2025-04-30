import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.Collections;
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine()); // 테스트 케이스의 개수, 1 <= T <= 1_000
        StringBuilder sb = new StringBuilder();

        for (int iter = 0; iter < T; iter++) {
            int M = Integer.parseInt(br.readLine()); // 수열의 크기, 1 <= M <= 9_999, M % 2 == 1
            int[] arr = new int[M];

            for (int i = 0; i <= (M - 1) / 10; i++) {
                int[] temp = Arrays.stream(br.readLine().split(" "))
                        .mapToInt(Integer::parseInt)
                        .toArray();

                for (int j = 0; j < temp.length; j++) {
                    arr[i * 10 + j] = temp[j];
                }
            }

            sb.append((M + 1) / 2).append("\n");

            PriorityQueue<Integer> minQueue = new PriorityQueue<>(Collections.reverseOrder());
            PriorityQueue<Integer> maxQueue = new PriorityQueue<>();
            int count = 1;

            minQueue.offer(arr[0]);
            sb.append(arr[0]).append(" ");

            for (int i = 1; i < M; i++) {
                if (arr[i] < minQueue.peek()) {
                    minQueue.offer(arr[i]);
                } else {
                    maxQueue.offer(arr[i]);
                }

                while (minQueue.size() - maxQueue.size() >= 2) {
                    maxQueue.offer(minQueue.poll());
                }

                while (maxQueue.size() - minQueue.size() >= 2) {
                    minQueue.offer(maxQueue.poll());
                }

                if (i % 2 == 0) {
                    if (count % 10 == 0) {
                        sb.append("\n");
                    }
                    
                    if (minQueue.size() > maxQueue.size()) {
                        sb.append(minQueue.peek()).append(" ");
                    } else {
                        sb.append(maxQueue.peek()).append(" ");
                    }
                    count++;
                }
            }

            sb.append("\n");
        }

        System.out.print(sb.toString().trim());
    }
}
