# NUMBERGAME

### Source Code
```Java
import java.util.Arrays;
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int n; // 게임판의 길이, 1 ~ 50
    public static int[] board;
    public static int[][] cache;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);

        for (int c = sc.nextInt(); c > 0; c--) {
            n = sc.nextInt();
            board = new int[n];
            cache = new int[n][n];

            for (int i = 0; i < n; i++) {
                board[i] = sc.nextInt();
                Arrays.fill(cache[i], -987654321);
            }

            System.out.println(findAnswer(0, n - 1));
        }
    }

    public static int findAnswer(int left, int right) {
        if (left > right) {
            return 0;
        } else if (cache[left][right] != -987654321) {
            return cache[left][right];
        }

        int result = Math.max(
                board[left] - findAnswer(left + 1, right),
                board[right] - findAnswer(left, right - 1)
        );

        if (right - left >= 1) {
            result = Math.max(result, (-1) * findAnswer(left + 2, right));
            result = Math.max(result, (-1) * findAnswer(left, right - 2));
        }

        cache[left][right] = result;
        return result;
    }
}
```
