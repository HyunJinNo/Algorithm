import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine().trim()); // 2 <= N <= 1_000
        int[] arr = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
        Arrays.sort(arr);
        System.out.print(arr[N - 1] - arr[0]);
        br.close();
    }
}