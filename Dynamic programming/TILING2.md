# TILING2.md

### Source Code
```Java
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int[] visited = new int[101];

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        for (int i = 0; i < C; i++) {
            int n = sc.nextInt();
            System.out.println(findAnswer(n));
        }
    }

    public static int findAnswer(int n) {
        if (visited[n] != 0) {
            return visited[n];
        } else if (n <= 1) {
            return 1;
        }

        int answer = (findAnswer(n - 2) + findAnswer(n - 1)) % 1000000007;
        visited[n] = answer;
        return answer;
    }
}
```
