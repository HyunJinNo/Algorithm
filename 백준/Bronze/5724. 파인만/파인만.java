import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        int[] arr = new int[101];

        for (int i = 1; i <= 100; i++) {
            arr[i] = arr[i - 1] + i * i;
        }

        while (true) {
            int N = Integer.parseInt(br.readLine().trim()); // 1 <= N <= 100

            if (N == 0) {
                System.out.print(sb.toString().trim());
                br.close();
                break;
            }

            sb.append(arr[N]).append("\n");
        }
    }
}