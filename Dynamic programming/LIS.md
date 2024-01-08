# LIS (Longest Increasing Subsequence)

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
            visited = new int[n];

            int[] arr = new int[n];
            for (int j = 0; j < n; j++) {
                arr[j] = sc.nextInt();
            }

            int answer = 0;
            for (int j = 0; j < n; j++) {
                answer = Math.max(answer, findAnswer(arr, j));
            }
            System.out.println(answer);
        }
    }

    public static int findAnswer(int[] arr, int index) {
        if (visited[index] != 0) {
            return visited[index];
        }

        int length = 1;
        visited[index] = length;
        for (int i = index + 1; i < arr.length; i++) {
            if (arr[index] < arr[i]) {
                length = Math.max(length, 1 + findAnswer(arr, i));
                visited[index] = length;
            }
        }

        return length;
    }
}
```
