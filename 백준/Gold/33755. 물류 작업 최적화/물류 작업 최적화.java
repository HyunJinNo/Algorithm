import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine().trim()); // 총 시간, 1 <= N <= 300_000
        int[] arr = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray(); // -1_000 <= arr[i] <= 1_000
        int[] leftSum = new int[N];
        int[] rightSum = new int[N];

        for (int i = 1; i < N; i++) {
            leftSum[i] = Math.max(0, leftSum[i - 1] + arr[i - 1]);
        }

        for (int i = N - 2; i >= 0; i--) {
            rightSum[i] = Math.max(0, rightSum[i + 1] + arr[i + 1]);
        }

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < N; i++) {
            sb.append(arr[i] + leftSum[i] + rightSum[i]).append(" ");
        }

        System.out.print(sb.toString().trim());
        br.close();
    }
}