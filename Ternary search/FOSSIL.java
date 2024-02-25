import java.io.*;
import java.util.ArrayList;

public class Main {
    public static double[][] p1;
    public static double[][] p2;
    public static ArrayList<double[][]> upper = new ArrayList<double[][]>(); // 오목 함수
    public static ArrayList<double[][]> lower = new ArrayList<double[][]>(); // 볼록 함수

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/main/kotlin/input.txt"));
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

        for (int T = Integer.parseInt(br.readLine()); T > 0; T--) {
            String[] temp = br.readLine().split(" ");

            // 1 <= n, m <= 100
            int n = Integer.parseInt(temp[0]);
            int m = Integer.parseInt(temp[1]);

            p1 = new double[n][2];
            p2 = new double[m][2];

            temp = br.readLine().split(" ");
            for (int i = 0; i < n; i++) {
                p1[i][0] = Double.parseDouble(temp[i * 2]);
                p1[i][1] = Double.parseDouble(temp[i * 2 + 1]);
            }

            temp = br.readLine().split(" ");
            for (int i = 0; i < m; i++) {
                p2[i][0] = Double.parseDouble(temp[i * 2]);
                p2[i][1] = Double.parseDouble(temp[i * 2 + 1]);
            }

            upper.clear();
            lower.clear();
            decompose(p1);
            decompose(p2);

            bw.write(solve() + "\n");
        }

        br.close();
        bw.flush();
        bw.close();
    }

    /**
     * 인접한 두 점에 대해 x가 증가하는 방향이면 아래쪽 껍질, x가 감소하는 방향이면 위쪽 껍질로 분류한다.
     * @param p 점의 좌표 목록
     */
    public static void decompose(double[][] p) {
        int n = p.length;
        for (int i = 0; i < n; i++) {
            if (p[i][0] < p[(i + 1) % n][0]) {
                lower.add(new double[][] { { p[i][0], p[i][1] }, { p[(i + 1) % n][0], p[(i + 1) % n][1] } });
            } else if (p[i][0] > p[(i + 1) % n][0]) {
                upper.add(new double[][] { { p[i][0], p[i][1] }, { p[(i + 1) % n][0], p[(i + 1) % n][1] } });
            }
        }
    }

    /**
     * 두 점의 x좌표 사이에 x가 포함되는지 확인한다.
     * @param p1 점 1
     * @param p2 점 2
     * @param x x 좌표 값
     * @return 두 점의 x좌표 사이에 x가 포함되는지 여부
     */
    public static boolean between(double[] p1, double[] p2, double x) {
        return (p1[0] <= x && x <= p2[0]) || (p2[0] <= x && x <= p1[0]);
    }

    /**
     * 두 점을 잇는 선분과 주어진 위치의 수직선이 교차하는 위치를 반환한다.
     * @param p1 점 1
     * @param p2 점 2
     * @param x x 좌표 값
     * @return 교차하는 위치
     */
    public static double at(double[] p1, double[] p2, double x) {
        double dy = p2[1] - p1[1];
        double dx = p2[0] - p1[0];
        return p1[1] + dy * (x - p1[0]) / dx;
    }

    /**
     * 두 다각형의 교집합을 수직선으로 잘랐을 때 단면의 길이를 반환한다.
     * @param x x 좌표 값
     * @return 단면의 길이
     */
    public static double vertical(double x) {
        double minUp = 101.0;
        double maxLow = -1.0;

        // 위 껍질의 선분을 순회하며 최소 y 좌표를 찾는다.
        for (double[][] points : upper) {
            if (between(points[0], points[1], x)) {
                minUp = Math.min(minUp, at(points[0], points[1], x));
            }
        }

        // 아래 껍질의 선분을 순회하며 최대 y 좌표를 찾는다.
        for (double[][] points: lower) {
            if (between(points[0], points[1], x)) {
                maxLow = Math.max(maxLow, at(points[0], points[1], x));
            }
        }

        return minUp - maxLow;
    }

    public static double solve() {
        double minX1 = 101.0;
        double minX2 = 101.0;
        double maxX1 = -1.0;
        double maxX2 = -1.0;

        for (double[] p : p1) {
            minX1 = Math.min(minX1, p[0]);
            maxX1 = Math.max(maxX1, p[0]);
        }
        for (double[] p : p2) {
            minX2 = Math.min(minX2, p[0]);
            maxX2 = Math.max(maxX2, p[0]);
        }

        double lo = Math.max(minX1, minX2);
        double hi = Math.min(maxX1, maxX2);

        if (hi < lo) {
            return 0.0;
        }

        for (int iter = 0; iter < 100; iter++) {
            double a = (lo * 2 + hi) / 3.0;
            double b = (lo + 2 * hi) / 3.0;
            if (vertical(a) < vertical(b)) {
                lo = a;
            } else {
                hi = b;
            }
        }

        return Math.max(0.0, vertical(hi));
    }
}
