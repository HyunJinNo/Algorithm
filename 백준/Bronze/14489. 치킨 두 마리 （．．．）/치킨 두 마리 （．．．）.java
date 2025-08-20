import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] arr = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
        int A = arr[0];
        int B = arr[1];
        int C = Integer.parseInt(br.readLine().trim());

        if (C * 2 <= A + B) {
            System.out.print(A + B - C * 2);
        } else {
            System.out.print(A + B);
        }

        br.close();
    }
}