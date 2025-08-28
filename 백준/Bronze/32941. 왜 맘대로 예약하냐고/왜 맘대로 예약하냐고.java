import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] arr = br.readLine().trim().split(" ");
        int T = Integer.parseInt(arr[0]); // 교실을 예약할 수 있는 교시의 개수, 1 <= T <= 1_000
        int X = Integer.parseInt(arr[1]); // 건우가 예약한 교시
        int N = Integer.parseInt(br.readLine().trim()); // 조원의 수, 1 <= N <= 10
        boolean answer = true;

        for (int iter = 0; iter < N; iter++) {
            int K = Integer.parseInt(br.readLine().trim());

            if (Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).noneMatch(value -> value == X)) {
                answer = false;
                break;
            }
        }

        System.out.print(answer ? "YES" : "NO");
        br.close();
    }
}