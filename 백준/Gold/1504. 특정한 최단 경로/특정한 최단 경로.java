import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.PriorityQueue;

public class Main {
    static int N;
    static int E;
    static ArrayList<int[]>[] graph;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String[] temp = br.readLine().split(" ");
        N = Integer.parseInt(temp[0]); // 정점의 개수, 2 <= N <= 800
        E = Integer.parseInt(temp[1]); // 간선의 개수, 0 <= E <= 200_000
        graph = new ArrayList[N + 1];

        for (int i = 0; i <= N; i++) {
            graph[i] = new ArrayList<>();
        }

        for (int iter = 0; iter < E; iter++) {
            temp = br.readLine().split(" ");
            int a = Integer.parseInt(temp[0]);
            int b = Integer.parseInt(temp[1]);
            int c = Integer.parseInt(temp[2]); // 1 <= c <= 1_000

            graph[a].add(new int[]{b, c});
            graph[b].add(new int[]{a, c});
        }

        temp = br.readLine().split(" ");
        int v1 = Integer.parseInt(temp[0]);
        int v2 = Integer.parseInt(temp[1]);

        int answer = Math.min(
                dijkstra(1, v1) + dijkstra(v1, v2) + dijkstra(v2, N),
                dijkstra(1, v2) + dijkstra(v2, v1) + dijkstra(v1, N)
        );

        System.out.print(answer >= 10_000_000 ? -1 : answer);
        br.close();
    }

    public static int dijkstra(int src, int dest) {
        int[] distance = new int[N + 1];
        Arrays.fill(distance, 10_000_000);
        distance[src] = 0;

        boolean[] visited = new boolean[N + 1];
        visited[src] = true;

        PriorityQueue<int[]> pq = new PriorityQueue<>(Comparator.comparingInt(a -> a[1]));

        for (int i = 0; i < graph[src].size(); i++) {
            distance[graph[src].get(i)[0]] = graph[src].get(i)[1];
            pq.offer(graph[src].get(i));
        }

        while (!pq.isEmpty()) {
            int[] arr = pq.poll();

            if (arr[0] == dest) {
                break;
            }

            if (visited[arr[0]]) {
                continue;
            }

            visited[arr[0]] = true;

            for (int[] data : graph[arr[0]]) {
                if (!visited[data[0]] && distance[data[0]] > distance[arr[0]] + data[1]) {
                    distance[data[0]] = distance[arr[0]] + data[1];
                    pq.offer(new int[]{data[0], distance[arr[0]] + data[1]});
                }
            }
        }

        return distance[dest];
    }
}