# TRIANGLEPATH

### Source Code
```Java
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        for (int i = 0; i < C; i++) {
            int n = sc.nextInt();
            int[][] triangle = new int[n][n];
            for (int row = 0; row < n; row++) {
                for (int col = 0; col <= row; col++) {
                    triangle[row][col] = sc.nextInt();
                }
            }

            for (int row = 1; row < n; row++) {
                for (int col = 0; col <= row; col++) {
                    if (col == 0) {
                        triangle[row][col] += triangle[row - 1][col];
                    } else if (col == row) {
                        triangle[row][col] += triangle[row - 1][col - 1];
                    } else {
                        triangle[row][col] += Math.max(triangle[row - 1][col - 1], triangle[row - 1][col]);
                    }
                }
            }

            int answer = 0;
            for (int num : triangle[n - 1]) {
                if (answer < num) {
                    answer = num;
                }
            }

            System.out.println(answer);
        }
    }
}
```
