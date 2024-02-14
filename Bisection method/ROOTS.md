# ROOTS

### Source Code
```Java
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int n; // 방정식의 차수, 2 ~ 5
    public static double[] poly;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);

        for (int T = sc.nextInt(); T > 0; T--) {
            n = sc.nextInt();
            poly = new double[n + 1];
            for (int i = 0; i < n + 1; i++) {
                poly[i] = sc.nextDouble();
            }

            double[] result = solve(poly);

            if (result != null) {
                for (double x : result) {
                    System.out.print(x + " ");
                }
                System.out.println();
            }
        }
    }

    /**
     * 단일 변수 다항식 p의 계수가 주어질 때 미분한 결과의 계수를 반환한다.
     * @param poly 단일 변수 다항식
     * @return 미분한 결과
     */
    public static double[] differentiate(double[] poly) {
        double[] result = new double[poly.length - 1];
        int degree = poly.length - 1;

        for (int i = 0; i < result.length; i++) {
            result[i] = poly[i] * degree;
            degree--;
        }
        return result;
    }

    /**
     * 1차 또는 2차 방정식 풀기
     * @param poly 단일 변수 다항식
     * @return 다항식의 해
     */
    public static double[] solveNaive(double[] poly) {
        int degree = poly.length - 1;

        if (degree == 1) {
            double[] result = new double[1];
            result[0] = (-1) * poly[0] / poly[1];
            return result;
        } else { // degree == 2
            double a = poly[0];
            double b = poly[1];
            double c = poly[2];

            double temp = (b * b) - (4 * a * c);
            if (temp > 0) {
                double[] result = new double[2];
                result[0] = (((-1) * b) - Math.sqrt(temp)) / (2 * a);
                result[1] = (((-1) * b) + Math.sqrt(temp)) / (2 * a);
                return result;
            } else if (temp == 0) {
                double[] result = new double[1];
                result[0] = ((-1) * b) / (2 * a);
                return result;
            } else {
                return null;
            }
        }
    }

    /**
     * f(x)의 값을 반환한다.
     * @param poly 단일 변수 다항식
     * @param x 변수 값
     * @return f(x)의 값
     */
    public static double evaluate(double[] poly, double x) {
        double result = 0.0;
        int degree = poly.length - 1;

        for (double num : poly) {
            result += num * Math.pow(x, degree);
            degree--;
        }

        return result;
    }

    public static double[] solve(double[] poly) {
        int degree = poly.length - 1;

        if (degree <= 2) {
            return solveNaive(poly);
        }

        double[] derivatives = differentiate(poly);
        double[] temp = solve(derivatives);
        double[] sols = new double[temp.length + 2];
        System.arraycopy(temp, 0, sols, 1, sols.length - 2);
        sols[0] = -11.0;
        sols[sols.length - 1] = 11.0;

        ArrayList<Double> result = new ArrayList<>();
        for (int i = 0; i < sols.length - 1; i++) {
            double x1 = sols[i];
            double x2 = sols[i + 1];
            double y1 = evaluate(poly, x1);
            double y2 = evaluate(poly, x2);

            if (y1 * y2 > 0) {
                continue;
            }

            if (y1 > y2) {
                double swap = y1;
                y1 = y2;
                y2 = swap;

                swap = x1;
                x1 = x2;
                x2 = swap;
            }

            for (int iteration = 0; iteration < 100; iteration++) {
                double mx = (x1 + x2) / 2;
                double my = evaluate(poly, mx);
                if (y1 * my > 0) {
                    y1 = my;
                    x1 = mx;
                } else {
                    y2 = my;
                    x2 = mx;
                }
            }

            result.add((x1 + x2) / 2);
        }

        double[] answer = new double[result.size()];
        for (int i = 0; i < answer.length; i++) {
            answer[i] = result.get(i);
        }
        Arrays.sort(answer);
        return answer;
    }
}
```
