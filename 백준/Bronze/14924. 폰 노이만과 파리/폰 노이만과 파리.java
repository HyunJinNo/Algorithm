import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] arr = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
        final int S = arr[0];
        final int T = arr[1];
        final int D = arr[2];

        System.out.print(D / (S * 2) * T);
        br.close();
    }
}