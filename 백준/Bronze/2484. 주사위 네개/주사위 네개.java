import java.io.BufferedReader;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine().trim()); // 사람 수, 1 <= N <= 1,000
        int answer = 0;

        for (int iter = 0; iter < N; iter++) {
            int[] arr = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
            Arrays.sort(arr);

            if (arr[0] == arr[3]) {
                answer = Math.max(answer, 50000 + 5000 * arr[0]);
            } else if (arr[1] == arr[3]) {
                answer = Math.max(answer, 10000 + 1000 * arr[1]);
            } else if (arr[0] == arr[2]) {
                answer = Math.max(answer, 10000 + 1000 * arr[0]);
            } else if (arr[0] == arr[1] && arr[2] == arr[3]) {
                answer = Math.max(answer, 2000 + 500 * arr[0] + 500 * arr[2]);
            } else if (arr[0] == arr[1]) {
                answer = Math.max(answer, 1000 + 100 * arr[0]);
            } else if (arr[1] == arr[2]) {
                answer = Math.max(answer, 1000 + 100 * arr[1]);
            } else if (arr[2] == arr[3]) {
                answer = Math.max(answer, 1000 + 100 * arr[2]);
            } else {
                answer = Math.max(answer, 100 * arr[3]);
            }
        }

        br.close();
        System.out.print(answer);
    }
}