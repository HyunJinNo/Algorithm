import java.io.*;
import java.util.ArrayList;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int[] arr = Arrays.stream(br.readLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray();
        int N = arr[0]; // 우주신들의 개수, 1 <= N <= 1_000
        int M = arr[1]; // 이미 연결된 신들과의 통로의 개수, 1 <= M <= 1_000

        ArrayList<double[]> arrayList = new ArrayList<>();
        for (int iter = 0; iter < N; iter++) {
            int[] temp = Arrays.stream(br.readLine().split(" "))
                    .mapToInt(Integer::parseInt)
                    .toArray();
            int X = temp[0];
            int Y = temp[1];

            arrayList.add(new double[]{X, Y});
        }

        boolean[] visited = new boolean[N];
        visited[0] = true;
        double[][] graph = new double[N][N];
        double[] distance = new double[N];
        double answer = 0.0;

        for (int i = 0; i < N; i++) {
            double[] pos1 = arrayList.get(i);

            for (int j = 0; j < N; j++) {
                double[] pos2 = arrayList.get(j);
                graph[i][j] = Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));
            }
        }

        for (int iter = 0; iter < M; iter++) {
            int[] temp = Arrays.stream(br.readLine().split(" "))
                    .mapToInt(Integer::parseInt)
                    .toArray();
            int a = temp[0];
            int b = temp[1];

            graph[a - 1][b - 1] = 0;
            graph[b - 1][a - 1] = 0;
        }
        br.close();

        for (int i = 0; i < N; i++) {
            distance[i] = graph[0][i];
        }

        for (int iter = 0; iter < N - 1; iter++) {
            int next = 0;
            double minDistance = 2000000.0;

            for (int i = 0; i < N; i++) {
                if (!visited[i] && minDistance > distance[i]) {
                    next = i;
                    minDistance = distance[i];
                }
            }

            visited[next] = true;
            answer += minDistance;

            for (int i = 0; i < N; i++) {
                distance[i] = Math.min(distance[i], graph[next][i]);
            }
        }

        bw.write(String.format("%.2f", answer));
        bw.flush();
        bw.close();
    }
}
