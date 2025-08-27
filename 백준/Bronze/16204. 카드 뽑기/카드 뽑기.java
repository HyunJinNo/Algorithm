import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] arr = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
        int N = arr[0];
        int M = arr[1];
        int K = arr[2];

        System.out.print(Math.min(M, K) + Math.min(N - M, N - K));
        br.close();
    }
}