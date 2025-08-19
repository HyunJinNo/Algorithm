import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.Arrays;

public class Main {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int[] arr = Arrays.stream(br.readLine().trim().split(" ")).mapToInt(Integer::parseInt).toArray();

        if (arr[0] + arr[1] + arr[2] >= 100) {
            System.out.print("OK");
        } else {
            if (arr[0] < arr[1] && arr[0] < arr[2]) {
                System.out.print("Soongsil");
            } else if (arr[1] < arr[0] && arr[1] < arr[2]) {
                System.out.print("Korea");
            } else {
                System.out.print("Hanyang");
            }
        }

        br.close();
    }
}