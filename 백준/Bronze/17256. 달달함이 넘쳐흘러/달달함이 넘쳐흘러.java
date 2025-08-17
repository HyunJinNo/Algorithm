import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] a = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();
        int[] c = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();

        System.out.print(c[0] - a[2] + " " + c[1] / a[1] + " " + (c[2] - a[0]));
    }
}