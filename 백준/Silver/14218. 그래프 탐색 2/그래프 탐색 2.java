import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Arrays;
import java.util.HashSet;

public class Main {
    static int[] answer;
    static HashSet<Integer>[] graph;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] temp = br.readLine().trim().split(" ");
        int n = Integer.parseInt(temp[0]); // 도시의 개수, 2 <= n <= 1,000
        int m = Integer.parseInt(temp[1]); // 도로의 개수, 1 <= m <= 100,000
        answer = new int[n + 1];
        graph = new HashSet[n + 1];

        for (int i = 1; i <= n; i++) {
            graph[i] = new HashSet<>();
        }

        for (int iter = 0; iter < m; iter++) {
            temp = br.readLine().trim().split(" ");
            int a = Integer.parseInt(temp[0]);
            int b = Integer.parseInt(temp[1]);
            graph[a].add(b);
            graph[b].add(a);
        }

        int q = Integer.parseInt(br.readLine().trim()); // 1 <= q <= 500
        StringBuilder sb = new StringBuilder();

        for (int iter = 0; iter < q; iter++) {
            temp = br.readLine().trim().split(" ");
            int i = Integer.parseInt(temp[0]);
            int j = Integer.parseInt(temp[1]);
            graph[i].add(j);
            graph[j].add(i);
            findAnswer();

            for (int index = 1; index <= n; index++) {
                sb.append(answer[index]).append(" ");
            }
            sb.append("\n");
        }

        br.close();
        System.out.print(sb.toString().trim());
    }

    static void findAnswer() {
        Arrays.fill(answer, -1);
        ArrayDeque<int[]> deque = new ArrayDeque(); // [pos, distance]
        deque.offerLast(new int[]{1, 0});
        answer[1] = 0;

        while (!deque.isEmpty()) {
            int[] arr = deque.removeFirst();
            int pos = arr[0];
            int distance = arr[1];

            graph[pos].forEach(next -> {
                if (answer[next] == -1) {
                    deque.offerLast(new int[]{next, distance + 1});
                    answer[next] = distance + 1;
                }
            });
        }
    }
}