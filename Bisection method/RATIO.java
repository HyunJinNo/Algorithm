import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static final long L = 2000000000L; // 최대 게임 수
    public static long n; // 게임 횟수, 1 <= n <= 1000000000
    public static long m; // 승리 횟수, 0 <= m <= n

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/main/kotlin/input.txt"));
        Scanner sc = new Scanner(System.in);

        for (int T = sc.nextInt(); T > 0; T--) {
            n = sc.nextLong();
            m = sc.nextLong();
            System.out.println(optimize());
        }
    }

    /**
     * 승률을 반환하는 함수
     * @param n 게임 횟수
     * @param m 승리 횟수
     * @return 승률
     */
    public static int ratio(long n, long m) {
        return (int) ((m * 100) / n);
    }

    public static int optimize() {
        if (ratio(n, m) == ratio(n + L, m + L)) {
            return -1;
        }

        long left = 0;
        long right = L;

        while (left + 1 < right) {
            long mid = (left + right) / 2;
            if (ratio(n, m) == ratio(n + mid, m + mid)) {
                left = mid;
            } else {
                right = mid;
            }
        }

        return (int) right;
    }
}
