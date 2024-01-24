# SUSHI

### Source Code
```Java
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int n; // 초밥의 종류, 1 ~ 20
    public static int m; // 예산, 1 ~ 10000000
    public static int[] sushi; // sushi[i]: 1 ~ 200
    public static int[] pref; // 선호도, 1 ~ 20
    public static int[] cache;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);

        for (int c = sc.nextInt(); c > 0; c--) {
            n = sc.nextInt();
            m = sc.nextInt() / 100;
            sushi = new int[n];
            pref = new int[n];
            cache = new int[201];
            for (int i = 0; i < n; i++) {
                sushi[i] = sc.nextInt() / 100;
                pref[i] = sc.nextInt();
            }

            System.out.println(findAnswer());
        }
    }

    public static int findAnswer() {
        int result = 0;
        for (int budget = 1; budget <= m; budget++) {
            int temp = 0;
            for (int index = 0; index < n; index++) {
                if (budget - sushi[index] >= 0) {
                    temp = Math.max(temp, pref[index] + cache[(budget - sushi[index]) % 201]);
                }
            }
            cache[budget % 201] = temp;
            result = Math.max(result, temp);
        }

        return result;
    }
}
```
