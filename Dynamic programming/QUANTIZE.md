# QUANTIZE

### Source Code
```Java
import java.util.Arrays;
import java.util.Scanner;
import java.io.FileInputStream;

public class Main {
    public static int[][] visited;

    public static void main(String[] args) throws Exception {
        System.setIn(new FileInputStream("src/input.txt"));
        Scanner sc = new Scanner(System.in);
        int C = sc.nextInt();

        for (int i = 0; i < C; i++) {
            visited = new int[100][10];
            int n = sc.nextInt(); // 1 <= n <= 100
            int s = sc.nextInt(); // 1 <= s <= 10
            int[] arr = new int[n];
            for (int j = 0; j < n; j++) {
                arr[j] = sc.nextInt();
            }

            Arrays.sort(arr);

            int answer = findAnswer(arr, 0, s - 1);
            System.out.println(answer);
        }
    }

    public static int findAnswer(int[] arr, int index, int count) {
        if (index >= arr.length) {
            return 0;
        } else if (visited[index][count] != 0) {
            return visited[index][count];
        } else if (count == 0) {
            visited[index][count] = quantize(arr, index, arr.length - 1);
            return visited[index][count];
        }

        int answer = Integer.MAX_VALUE;
        for (int i = index; i < arr.length; i++) {
            answer = Math.min(answer, quantize(arr, index, i) + findAnswer(arr, i + 1, count - 1));
        }

        visited[index][count] = answer;
        return answer;
    }

    public static int quantize(int[] arr, int startIndex, int endIndex) {
        int result = Integer.MAX_VALUE;

        for (int num = arr[startIndex]; num <= arr[endIndex]; num++) {
            int sum = 0;
            for (int i = startIndex; i <= endIndex; i++) {
                sum += (arr[i] - num) * (arr[i] - num);
            }
            result = Math.min(result, sum);
        }

        return result;
    }
}
```
