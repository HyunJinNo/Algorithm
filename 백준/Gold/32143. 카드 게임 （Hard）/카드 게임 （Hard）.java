import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int H = Integer.parseInt(br.readLine()); // 상대의 체력, 1 <= H <= 1_000_000_000
        String[] temp = br.readLine().split(" ");

        int N = Integer.parseInt(temp[0]); // 현재 보유하고 있는 카드의 수, 1 <= N <= 300_000
        int Q = Integer.parseInt(temp[1]); // 추가되는 카드의 수, 1 <= Q <= 300_000
        int[] arr = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();

        StringBuilder sb = new StringBuilder();
        PriorityQueue<Integer> pq = new PriorityQueue<>();
        long sum = 0;

        for (int num : arr) {
            pq.offer(num);
            sum += num;

            while (!pq.isEmpty() && sum - pq.peek() >= H) {
                sum -= pq.poll();
            }
        }

        if (sum >= H) {
            sb.append(pq.size()).append("\n");
        } else {
            sb.append(-1).append("\n");
        }

        for (int iter = 0; iter < Q; iter++) {
            int x = Integer.parseInt(br.readLine()); // 1 <= x <= 1_000_000_000

            pq.offer(x);
            sum += x;

            while (!pq.isEmpty() && sum - pq.peek() >= H) {
                sum -= pq.poll();
            }

            if (sum >= H) {
                sb.append(pq.size()).append("\n");
            } else {
                sb.append(-1).append("\n");
            }
        }

        System.out.print(sb.toString().trim());
        br.close();
    }
}