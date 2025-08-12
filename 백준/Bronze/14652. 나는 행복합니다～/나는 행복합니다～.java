import java.io.BufferedReader;
import java.io.InputStreamReader;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        String[] arr = br.readLine().trim().split(" ");
        final int N = Integer.parseInt(arr[0]);
        final int M = Integer.parseInt(arr[1]);
        final int K = Integer.parseInt(arr[2]);

        System.out.print((K / M) + " " + (K % M));
        br.close();
    }
}