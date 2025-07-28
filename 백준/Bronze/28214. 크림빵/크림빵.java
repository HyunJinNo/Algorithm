import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int answer = 0;
        int[] temp = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
        int N = temp[0]; // 1 <= N <= 50
        int K = temp[1]; // 1 <= K <= 50
        int P = temp[2]; // 1 <= P <= K
        int[] arr = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
        br.close();

        for (int i = 0; i < N; i++) {
            int count = 0;

            for (int j = 0; j < K; j++) {
                if (arr[i * K + j] == 0) {
                    count++;
                }
            }

            if (count < P) {
                answer++;
            }
        }

        System.out.print(answer);
    }
}