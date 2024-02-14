import java.util.Arrays;
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static String e;  // 마지막 계란 가격, 1 ~ 10^14
    public static String sortedStr;
    public static int m;  // 사탕 개수, 2 ~ 20
    public static int answer;
    public static int[][][] cache;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        for (int i = 0; i < C; i++) {
            e = sc.next();
            m = sc.nextInt();
            answer = 0;
            cache = new int[Integer.MAX_VALUE][m][2];

            char[] temp = e.toCharArray();
            Arrays.sort(temp);
            sortedStr = new String(temp);

            int n = e.length();
            boolean[] used = new boolean[n];

            findAnswer("", used, n);

            System.out.println(answer);
        }
    }

    /**
     * @param price 지금까지 만든 가격
     * @param used 각 자릿수의 사용 여부
     * @param n 계란 가격의 길이
     */
    public static void findAnswer(String price, boolean[] used, int n) {
        if (price.length() == n) {
            long currentPrice = Long.parseLong(price);
            if (currentPrice < Long.parseLong(e) && currentPrice % m == 0) {
                answer++;
            }
            return;
        }

        for (int i = 0; i < n; i++) {
            if (!used[i] && (i == 0 || sortedStr.charAt(i) != sortedStr.charAt(i - 1) || used[i - 1])) {
                used[i] = true;
                findAnswer(price + sortedStr.charAt(i), used, n);
                used[i] = false;
            }
        }
    }
}