import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int T = Integer.parseInt(br.readLine().trim()); // 테스트 케이스의 개수
        StringBuilder sb = new StringBuilder();

        for (int iter = 0; iter < T; iter++) {
            double[] arr = Arrays.stream(br.readLine().split(" ")).mapToDouble(Double::parseDouble).toArray();
            int N = 0;
            int M = 0;

            for (int index = 0; index < 6; index += 2) {
                double distance = Math.sqrt(arr[index] * arr[index] + arr[index + 1] * arr[index + 1]);
                N += getScore(distance);
            }

            for (int index = 6; index < 12; index += 2) {
                double distance = Math.sqrt(arr[index] * arr[index] + arr[index + 1] * arr[index + 1]);
                M += getScore(distance);
            }

            sb.append("SCORE: ")
                    .append(N)
                    .append(" to ")
                    .append(M);

            if (N > M) {
                sb.append(", PLAYER 1 WINS.\n");
            } else if (N < M) {
                sb.append(", PLAYER 2 WINS.\n");
            } else {
                sb.append(", TIE.\n");
            }
        }

        br.close();
        System.out.print(sb.toString().trim());
    }

    public static int getScore(double distance) {
        if (distance <= 3.0) {
            return 100;
        } else if (distance <= 6.0) {
            return 80;
        } else if (distance <= 9.0) {
            return 60;
        } else if (distance <= 12.0) {
            return 40;
        } else if (distance <= 15.0) {
            return 20;
        } else {
            return 0;
        }
    }
}
