import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] arr = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
        int n = arr[0]; // 2 <= n <= 200
        int m = arr[1]; // 2 <= m <= 200

        if (n % 2 == 1 && m % 2 == 1) {
            System.out.print(n * m - 1);
        } else {
            System.out.print(n * m);
        }
        
        br.close();
    }
}