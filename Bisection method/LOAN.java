import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static double n; // 대출 금액, 1 <= n <= 100000000
    public static int m; // m개월, 1 <= m <= 120
    public static double p; // 연 이율, 0 < p <= 50.0

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/main/kotlin/input.txt"));
        Scanner sc = new Scanner(System.in);

        for (int T = sc.nextInt(); T > 0; T--) {
            n = sc.nextDouble();
            m = sc.nextInt();
            p = sc.nextDouble();

            System.out.println(payment(n, m, p));
        }
    }

    /**
     * 남은 대출 잔금
     * @param amount 대출 금액
     * @param duration m개월
     * @param rates 이자율
     * @param monthlyPayment 월 상환액
     * @return 대출 잔금
     */
    public static double balance(double amount, int duration, double rates, double monthlyPayment) {
        double balance = amount;

        for (int i = 0; i < duration; i++) {
            balance *= (1.0 + (rates / 12.0) / 100.0);
            balance -= monthlyPayment;
        }

        return balance;
    }

    public static double payment(double amount, int duration, double rates) {
        double lo = 0.0;
        double hi = amount * (1.0 + (rates / 12.0) / 100.0);

        for (int iter = 0; iter < 100; iter++) {
            double mid = (lo + hi) / 2.0;
            if (balance(amount, duration, rates, mid) <= 0) {
                hi = mid;
            } else {
                lo = mid;
            }
        }

        return hi;
    }
}
