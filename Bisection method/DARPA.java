import java.util.ArrayList;
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int n; // 카메라의 개수, 1 ~ 100
    public static int m; // 설치 가능한 중계소의 개수, n ~ 200
    public static ArrayList<Double> location = new ArrayList<Double>();

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);

        for (int T = sc.nextInt(); T > 0; T--) {
            n = sc.nextInt();
            m = sc.nextInt();
            location.clear();
            for (int i = 0; i < m; i++) {
                location.add(sc.nextDouble());
            }

            System.out.printf("%.2f\n", optimize(location, n));
        }
    }

    public static boolean decision(ArrayList<Double> location, int cameras, double gap) {
        double limit = -1.0;
        int installed = 0;
        for (int i = 0; i < location.size(); i++) {
            if (limit <= location.get(i)) {
                installed++;
                limit = location.get(i) + gap;
            }
        }

        return (installed >= cameras);
    }

    public static double optimize(ArrayList<Double> location, int cameras) {
        double lo = 0.0;
        double hi = 241.0;

        for (int it = 0; it < 100; it++) {
            double mid = (lo + hi) / 2.0;
            if (decision(location, cameras, mid)) {
                lo = mid;
            } else {
                hi = mid;
            }
        }

        return lo;
    }
}
