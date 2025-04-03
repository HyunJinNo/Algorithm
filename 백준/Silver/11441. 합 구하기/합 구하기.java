import java.io.*;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        int N = Integer.parseInt(br.readLine()); // 수의 개수, 1 <= N <= 100_000
        int[] A = Arrays.stream(br.readLine().split(" "))
                .mapToInt(Integer::parseInt)
                .toArray(); // -1_000 <= A[i] <= 1_000
        int M = Integer.parseInt(br.readLine()); // 구간의 개수, 1 <= M <= 100_000
        int[] sum = new int[N];
        sum[0] = A[0];

        for (int i = 1; i < N; i++) {
            sum[i] = sum[i - 1] + A[i];
        }

        for (int iter = 0; iter < M; iter++) {
            int[] range = Arrays.stream(br.readLine().split(" "))
                    .mapToInt(Integer::parseInt)
                    .toArray();

            if (range[0] == 1) {
                bw.write((sum[range[1] - 1]) + "\n");
            } else {
                bw.write((sum[range[1] - 1] - sum[range[0] - 2]) + "\n");
            }
        }

        br.close();
        bw.flush();
        bw.close();
    }
}
