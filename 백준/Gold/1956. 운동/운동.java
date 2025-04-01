import java.io.*;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int[] temp1 = Arrays.stream(br.readLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();
        int V = temp1[0]; // 마을의 개수, 2 <= V <= 400
        int E = temp1[1]; // 도로의 개수, 0 <= E <= V * (V - 1)
        int[][] graph = new int[V][V];

        for (int row = 0; row < V; row++) {
            for (int col = 0; col < V; col++) {
                graph[row][col] = 987654321;
            }
        }

        for (int iter = 0; iter < E; iter++) {
            int[] temp2 = Arrays.stream(br.readLine().split(" "))
                    .mapToInt(Integer::parseInt)
                    .toArray();
            int a = temp2[0] - 1;
            int b = temp2[1] - 1;
            int c = temp2[2]; // 1 <= c <= 10_000

            graph[a][b] = c;
        }
        br.close();

        for (int middle = 0; middle < V; middle++) {
            for (int start = 0; start < V; start++) {
                for (int end = 0; end < V; end++) {
                    graph[start][end] = Math.min(graph[start][end], graph[start][middle] + graph[middle][end]);
                }
            }
        }

        int answer = 987654321;

        for (int i = 0; i < V; i++) {
            answer = Math.min(answer, graph[i][i]);
        }

        if (answer >= 987654321) {
            bw.write("-1");
        } else {
            bw.write(String.valueOf(answer));
        }

        bw.flush();
        bw.close();
    }
}