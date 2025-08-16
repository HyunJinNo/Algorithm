import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int T = Integer.parseInt(br.readLine().trim()); // 테스트 케이스의 개수, 1 <= T <= 100_000
        StringBuilder sb = new StringBuilder();

        for (int iter = 0; iter < T; iter++) {
            String str = br.readLine().trim();
            long N = Long.parseLong(str); // 1 <= N <= 10^1

            if (!check(N)) {
                sb.append("NO\n");
                continue;
            }

            StringBuilder temp = new StringBuilder(str);
            long reversedNum = Long.parseLong(temp.reverse().toString());

            if (!check(reversedNum)) {
                sb.append("NO\n");
                continue;
            }

            sb.append("YES\n");
        }

        System.out.print(sb.toString().trim());
        br.close();
    }

    private static boolean check(long num) {
        double A = Math.sqrt(num);
        return A == Math.floor(A);
    }
}