import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int[] temp = Arrays.stream(br.readLine().split(" ")).mapToInt(Integer::parseInt).toArray();
        int N = temp[0]; // 0 <= N <= 10
        int M = temp[1]; // 0 <= M <= 10
        StringBuilder answer = new StringBuilder();

        for (int iter = 0; iter < N; iter++) {
            StringBuilder sb = new StringBuilder();
            sb.append(br.readLine().trim());
            answer.append(sb.reverse()).append("\n");
        }

        br.close();
        System.out.print(answer.toString().trim());
    }
}