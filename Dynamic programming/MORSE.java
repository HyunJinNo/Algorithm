import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int[][] bino = new int[201][201];  // [n + m][m]

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        calcBino();

        for (int i = 0; i < C; i++) {
            int n = sc.nextInt();  // 장점(-)의 수, 1 ~ 100
            int m = sc.nextInt();  // 단점(o)의 수, 1 ~ 100
            int k = sc.nextInt();  // k 번째 신호, 1 ~ 1000000000

            System.out.println(findAnswer(n, m, k, 0));
        }
    }

    public static void calcBino() {
        for (int i = 1; i <= 200; i++) {
            bino[i][0] = 1;
            bino[i][i] = 1;
            for (int j = 1; j < i; j++) {
                bino[i][j] = Math.min(1000000000, bino[i - 1][j - 1] + bino[i - 1][j]);
            }
        }
    }

    public static String findAnswer(int n, int m, int k, int skip) {
        if (n == 0) {
            StringBuilder sb = new StringBuilder();
            while (m > 0) {
                sb.append("o");
                m--;
            }
            return sb.toString();
        } else if (m == 0) {
            StringBuilder sb = new StringBuilder();
            while (n > 0) {
                sb.append("-");
                n--;
            }
            return sb.toString();
        } else {
            if (k <= skip + bino[n + m - 1][m]) {
                return "-" + findAnswer(n - 1, m, k, skip);
            } else {
                return "o" + findAnswer(n, m - 1, k, skip + bino[n + m - 1][m]);
            }
        }
    }
}
