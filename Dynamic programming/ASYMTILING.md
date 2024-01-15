# ASYMTILING

### Source Code
```Java
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int[] visited;
    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        for (int i = 0; i < C; i++) {
            int n = sc.nextInt();
            visited = new int[n + 1];
            System.out.println(findAnswer(n));
        }
    }

    public static int findAllCases(int n) {
        if (visited[n] != 0) {
            return visited[n];
        } else if (n <= 1) {
            return 1;
        }

        int result = (findAllCases(n - 2) + findAllCases(n - 1)) % 1000000007;
        visited[n] = result;
        return result;
    }

    public static int findAnswer(int n) {
        if (n % 2 == 1) {
            return (findAllCases(n) - findAllCases((n - 1) / 2) + 1000000007) % 1000000007;
        } else {
            int result = findAllCases(n);
            result = (result - findAllCases(n / 2) + 1000000007) % 1000000007;
            result = (result - findAllCases((n - 2) / 2) + 1000000007) % 1000000007;
            return result;
        }
    }
}
```
