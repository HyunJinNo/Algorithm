import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static double[][] visited;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        for (int i = 0; i < C; i++) {
            int n = sc.nextInt();  // 1 <= n <= 1000
            int m = sc.nextInt();  // 1 <= m <= 1000
            visited = new double[n + 2][m + 1];
            for (int row = 0; row < visited.length; row++) {
                for (int col = 0; col < visited[0].length; col++) {
                    visited[row][col] = -1.0;
                }
            }

            System.out.println(0.25 * findAnswer(n, m - 1, 1) + 0.75 * findAnswer(n, m - 1, 2));
        }
    }

    public static double findAnswer(int n, int m, int h) {
        if (visited[h][m] != -1.0) {
            return visited[h][m];
        } else if (m == 0) {
            if (n <= h) {
                visited[h][m] = 1.0;
                return 1.0;
            } else {
                visited[h][m] = 0.0;
                return 0.0;
            }
        } else if (n <= h) {
            visited[h][m] = 1.0;
            return 1.0;
        }

        double result = 0.25 * findAnswer(n, m - 1, h + 1) + 0.75 * findAnswer(n, m - 1, h + 2);
        visited[h][m] = result;
        return result;
    }
}
