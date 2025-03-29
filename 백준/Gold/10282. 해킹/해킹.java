import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int T = Integer.parseInt(br.readLine()); // 테스트 케이스의 개수, 1 <= T <= 100

        for (int iter = 0; iter < T; iter++) {
            int[] arr = Arrays.stream(br.readLine().split(" "))
                    .mapToInt(Integer::parseInt)
                    .toArray();
            int n = arr[0]; // 컴퓨터 개수, 1 <= n <= 10_000
            int d = arr[1]; // 의존성 개수, 1 <= d <= 100_000
            int c = arr[2]; // 해킹당한 컴퓨터의 번호, 1 <= c <= n

            ArrayList<ArrayList<int[]>> graph = new ArrayList<>();

            for (int i = 0; i < n; i++) {
                graph.add(new ArrayList<>());
            }

            for (int iter2 = 0; iter2 < d; iter2++) {
                int[] arr2 = Arrays.stream(br.readLine().split(" "))
                        .mapToInt((Integer::parseInt))
                        .toArray();
                int a = arr2[0];
                int b = arr2[1];
                int s = arr2[2];

                graph.get(b - 1).add(new int[]{a - 1, s});
            }

            boolean[] visited = new boolean[n];
            visited[c - 1] = true;
            PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(o -> o[1]));

            graph.get(c - 1).forEach(pq::offer);

            int count = 1;
            int totalTime = 0;

            while (!pq.isEmpty()) {
                int[] data = pq.poll();
                if (visited[data[0]]) {
                    continue;
                }

                visited[data[0]] = true;
                count++;
                totalTime = data[1];

                graph.get(data[0]).forEach((value) -> {
                    if (!visited[value[0]]) {
                        pq.offer(new int[]{value[0], data[1] + value[1]});
                    }
                });
            }

            bw.write(count + " " + totalTime + "\n");
        }

        br.close();
        bw.flush();
        bw.close();
    }
}
