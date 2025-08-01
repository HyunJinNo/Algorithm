import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    static int n;
    static long[] F;
    static long[] C;
    static long V;
    static int T;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        n = Integer.parseInt(br.readLine().trim()); // 수문의 개수, 1 <= n <= 20
        F = new long[n];
        C = new long[n];

        for (int i = 0; i < n; i++) {
            int[] temp = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
            F[i] = temp[0]; // 1 <= F[i] <= 1_000_000_000
            C[i] = temp[1]; // 1 <= C[i] <= 1_000_000_000
        }

        int m = Integer.parseInt(br.readLine().trim()); // 테스트 케이스의 수, 1 <= m <= 50
        StringBuilder sb = new StringBuilder();

        for (int i = 1; i <= m; i++) {
            int[] temp = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
            V = temp[0]; // 1 <= V <= 1_000_000_000
            T = temp[1]; // 1 <= T <= 1_000

            long result = findAnswer(0, 0, 0);
            sb.append("Case ").append(i).append(": ").append(result == Long.MAX_VALUE ? "IMPOSSIBLE" : result).append("\n");
        }
        
        System.out.print(sb.toString().trim());
        br.close();
    }

    public static long findAnswer(int index, long total, long cost) {
        if (total >= V) {
            return cost;
        } else if (index >= n) {
            return Long.MAX_VALUE;
        }

        long result = Math.min(Long.MAX_VALUE, findAnswer(index + 1, total + F[index] * T, cost + C[index]));
        result = Math.min(result, findAnswer(index + 1, total, cost));

        return result;
    }
}