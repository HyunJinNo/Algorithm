import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();

        while (true) {
            int n = Integer.parseInt(br.readLine().trim()); // 1 <= n <= 100
            if (n == 0) {
                System.out.print(sb.toString().trim());
                br.close();
                break;
            }

            for (int i = 1; i <= n; i++) {
                sb.append("*".repeat(i)).append("\n");
            }
        }
    }
}