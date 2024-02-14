import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int[][] visited;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        for (int i = 0; i < C; i++) {
            int n = sc.nextInt();
            visited = new int[n + 1][n + 1];
            System.out.println(findAnswer(n, 0));
        }
    }

    public static int findAnswer(int n, int first) {
        if (visited[n][first] != 0) {
            return visited[n][first];
        } else if (n == first) {
            visited[n][first] = 1;
            return 1;
        }

        int result = 0;
        for (int second = 1; second <= n - first; second++) {
            if (first == 0) {
                result += (findAnswer(n - first, second)) % 10000000;
            } else {
                result += ((first + second - 1) * findAnswer(n - first, second)) % 10000000;
            }
            result %= 10000000;
        }

        visited[n][first] = result;
        return result;
    }
}
