import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int n; // 도시의 수, 1 ~ 5000
    public static int k; // k번째 표지판, 1 ~ (2^31 - 1)
    public static int[] L; // 시작점으로부터 각 도시까지의 거리
    public static int[] M; // M 미터 전부터 표지판 존재
    public static int[] G; // G 미터 간격으로 표지판이 설치되어 있음

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);

        for (int T = sc.nextInt(); T > 0; T--) {
            n = sc.nextInt();
            k = sc.nextInt();
            L = new int[n];
            M = new int[n];
            G = new int[n];

            for (int i = 0; i < n; i++) {
                L[i] = sc.nextInt();
                M[i] = sc.nextInt();
                G[i] = sc.nextInt();
            }

            System.out.println(optimize());
        }
    }

    public static boolean decision(int distance) {
        int result = 0;

        for (int i = 0; i < n; i++) {
            if (distance >= L[i] - M[i]) {
                result += (Math.min(distance, L[i]) - (L[i] - M[i])) / G[i] + 1;
            }
        }

        return (result >= k);
    }

    public static int optimize() {
        int lo = -1;
        int hi = 8030001;

        while (lo + 1 < hi) {
            int mid = (lo + hi) / 2;
            if (decision(mid)) {
                hi = mid;
            } else {
                lo = mid;
            }
        }

        return hi;
    }
}
