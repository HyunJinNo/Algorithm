import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] arr = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
        int N = arr[0];
        int M = arr[1];

        if (M <= 2) {
            System.out.print("NEWBIE!");
        } else if (N >= M) {
            System.out.print("OLDBIE!");
        } else {
            System.out.print("TLE!");
        }

        br.close();
    }
}