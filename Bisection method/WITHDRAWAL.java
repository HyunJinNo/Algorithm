import java.util.ArrayList;
import java.util.Collections;
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int n; // 과목의 수, 1 ~ 1000
    public static int k; // 남겨둬야 할 과목의 수, 1 ~ n
    public static int[] r; // 각 과목의 등수, 1 ~ c
    public static int[] c; // 각 과목의 수강생 수, r ~ 1000
    
    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);

        for (int T = sc.nextInt(); T > 0; T--) {
            n = sc.nextInt();
            k = sc.nextInt();
            r = new int[n];
            c = new int[n];
            
            for (int i = 0; i < n; i++) {
                r[i] = sc.nextInt();
                c[i] = sc.nextInt();
            }

            System.out.println(optimize());
        }
    }

    /**
     * 결정 문제: 누적 등수 average 가 될 수 있는가?
     * @param average 누적 등수
     * @return 누적 등수가 average 가 될 수 있는지 여부
     */
    public static boolean decision(double average) {
        ArrayList<Double> list = new ArrayList<Double>();
        for (int i = 0; i < n; i++) {
            list.add(average * c[i] - r[i]);
        }

        Collections.sort(list);

        double sum = 0.0;
        for (int i = n - k; i < n; i++) {
            sum += list.get(i);
        }

        return (sum >= 0);
    }

    /**
     * 최적화 문제: 얻을 수 있는 최소의 누적 등수를 계산한다.
     * @return 최소의 누적 등수
     */
    public static double optimize() {
        double lo = 0.0;
        double hi = 1.0;

        for (int iteration = 0; iteration < 100; iteration++) {
            double mid = (lo + hi) / 2;
            if (decision(mid)) {
                hi = mid;
            } else {
                lo = mid;
            }
        }

        return hi;
    }
}
