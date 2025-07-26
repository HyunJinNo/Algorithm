import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Comparator;
import java.util.HashMap;
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine().trim()); // 테스트 케이스의 개수
        StringBuilder sb = new StringBuilder();

        for (int iter = 0; iter < T; iter++) {
            int k = Integer.parseInt(br.readLine().trim()); // 1 <= k <= 1_000_000
            PriorityQueue<Integer> minQueue = new PriorityQueue<>();
            PriorityQueue<Integer> maxQueue = new PriorityQueue<>(Comparator.reverseOrder());
            HashMap<Integer, Integer> minQueueDeletedValues = new HashMap<>();
            HashMap<Integer, Integer> maxQueueDeletedValues = new HashMap<>();

            for (int iter2 = 0; iter2 < k; iter2++) {
                String[] temp = br.readLine().trim().split(" ");
                String command = temp[0]; // "D" or "I"
                int n = Integer.parseInt(temp[1]);

                if (command.equals("I")) {
                    minQueue.offer(n);
                    maxQueue.offer(n);
                } else if (!maxQueue.isEmpty()) {
                    if (n == 1) {
                        int value = maxQueue.poll();
                        minQueueDeletedValues.put(value, minQueueDeletedValues.getOrDefault(value, 0) + 1);
                    } else {
                        int value = minQueue.poll();
                        maxQueueDeletedValues.put(value, maxQueueDeletedValues.getOrDefault(value, 0) + 1);
                    }

                    while (maxQueueDeletedValues.getOrDefault(maxQueue.peek(), 0) > 0) {
                        maxQueueDeletedValues.put(maxQueue.peek(), maxQueueDeletedValues.get(maxQueue.peek()) - 1);
                        maxQueue.poll();
                    }

                    while (minQueueDeletedValues.getOrDefault(minQueue.peek(), 0) > 0) {
                        minQueueDeletedValues.put(minQueue.peek(), minQueueDeletedValues.get(minQueue.peek()) - 1);
                        minQueue.poll();
                    }
                }
            }

            while (maxQueueDeletedValues.getOrDefault(maxQueue.peek(), 0) > 0) {
                maxQueueDeletedValues.put(maxQueue.peek(), maxQueueDeletedValues.get(maxQueue.peek()) - 1);
                maxQueue.poll();
            }

            while (minQueueDeletedValues.getOrDefault(minQueue.peek(), 0) > 0) {
                minQueueDeletedValues.put(minQueue.peek(), minQueueDeletedValues.get(minQueue.peek()) - 1);
                minQueue.poll();
            }

            if (maxQueue.isEmpty()) {
                sb.append("EMPTY\n");
            } else {
                sb.append(maxQueue.peek())
                        .append(" ")
                        .append(minQueue.peek())
                        .append("\n");
            }
        }

        br.close();
        System.out.print(sb.toString().trim());
    }
}