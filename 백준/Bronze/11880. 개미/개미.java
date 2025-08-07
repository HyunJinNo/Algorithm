import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim()); // 테스트 케이스의 수, 1 <= T <= 100_000
        StringBuilder sb = new StringBuilder();

        for (int iter = 0; iter < T; iter++) {
            long[] arr = Arrays.stream(br.readLine().trim().split(" ")).mapToLong(Long::parseLong).toArray();
            Arrays.sort(arr);

            sb.append((long) (Math.pow(arr[0] + arr[1], 2) + arr[2] * arr[2])).append("\n");
        }

        System.out.print(sb.toString().trim());
        br.close();
    }
}